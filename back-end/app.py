from fastai.vision.all import *
from fastai.vision.widgets import *
from flask import (Flask, jsonify, render_template, request,
                   send_from_directory, url_for)
from flask_uploads import IMAGES, UploadSet, configure_uploads
from flask_wtf import FlaskForm
from flask_wtf.file import FileAllowed, FileField, FileRequired
from wtforms import SubmitField

app = Flask(__name__)

app.config['SECRET_KEY'] = 'eefb972a884f8b2966c20da6e0e47fda'
app.config['UPLOADED_PHOTOS_DEST'] = 'uploads'

photos = UploadSet('photos', IMAGES)
configure_uploads(app, photos)


class UploadForm(FlaskForm):
    photo = FileField(
        validators=[
            FileAllowed(photos, 'Only images are allowed'),
            FileRequired('File field should not be empty')
        ]
    )
    submit = SubmitField('Upload')


def getPrediction(file):
    path = Path()
    learn_inf = load_learner(path/'ai-facial-prediction-tcc.pkl', cpu=True)
    image = PILImage.create(file)
    prediction, pred_idx, probs = learn_inf.predict(image)
    return prediction, pred_idx, probs


@app.route('/uploads/<filename>')
def get_file(filename):
    return send_from_directory(app.config['UPLOADED_PHOTOS_DEST'], filename)


@app.route('/', methods=['GET', 'POST'])
def upload_image():
    form = UploadForm()
    if form.validate_on_submit():
        filename = photos.save(form.photo.data)
        file_url = url_for('get_file', filename=filename)
        prediction, pred_idx, probs = getPrediction(form.photo.data)
        probability = round(float(probs[pred_idx]) * 100, 3)
    else:
        file_url = None
        prediction = None
        probability = None
    return render_template('index.html', form=form, file_url=file_url, prediction=prediction, probability=probability)


@app.route('/user/verify/face/<name>',  methods=['POST'])
def verify_face(name):
    file = request.files['file']

    if file:
        prediction, pred_idx, probs = getPrediction(file)
    else:
        prediction = None
        probs = None
        pred_idx = None   

    return jsonify({ 
        'prediction': prediction,
        'probability_percent': float(probs[pred_idx]) * 100,
        'passOnVerification': name == prediction
    });


app.run(debug=True)