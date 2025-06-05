import React from "react";

const modelloCode = `from keras.layers import DepthwiseConv2D as BaseDepthwiseConv2D
from keras.models import load_model # TensorFlow is required for Keras to work
from PIL import Image, ImageOps  # Install pillow instead of PIL
import numpy as np

# Disable scientific notation for clarity
np.set_printoptions(suppress=True)

# Definisci una classe che ignora il parametro 'groups'
class CustomDepthwiseConv2D(BaseDepthwiseConv2D):
    pass
# Carica il modello passando la classe personalizzata
custom_objects = {'DepthwiseConv2D': CustomDepthwiseConv2D}
# Load the model
model = load_model("modello/keras_model.h5", custom_objects=custom_objects, compile=False)

# Load the labels
class_names = open("modello/labels.txt", "r").readlines()

data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)

# Replace this with the path to your image
image = Image.open("modello/validation_set/gallina (1).jpeg").convert("RGB")

# resizing the image to be at least 224x224 and then cropping from the center
size = (224, 224)
image = ImageOps.fit(image, size, Image.Resampling.LANCZOS)

# turn the image into a numpy array
image_array = np.asarray(image)

# Normalize the image
normalized_image_array = (image_array.astype(np.float32) / 127.5) - 1

data[0] = normalized_image_array

# Predicts the model
prediction = model.predict(data)
index = np.argmax(prediction)
class_name = class_names[index]
confidence_score = prediction[0][index]

print("Class:", class_name[2:], end="")
print("Confidence Score:", confidence_score)
`;

export default function ModelPage({ onBack }) {
    return (
        <main style={{background:'#181c24', color:'#f5f5f5', minHeight:'100vh', padding:'3vw'}}>
            <button onClick={onBack} style={{marginBottom:'2rem', padding:'0.5rem 1.2rem', borderRadius:'8px', border:'none', background:'#4fc3f7', color:'#222', fontWeight:600, cursor:'pointer', fontSize:'1rem'}}>← Torna alla Home</button>
            <h1 style={{color:'#4fc3f7'}}>Codice del Modello</h1>
            <pre style={{background:'#23272f', color:'#fff', padding:'1.5rem', borderRadius:'12px', overflowX:'auto', fontSize:'1rem', marginTop:'2rem'}}>
                {modelloCode}
            </pre>
            <a href="/modello.zip" download style={{display:'inline-block', marginTop:'2.5rem', padding:'0.7rem 2rem', background:'#81c784', color:'#222', borderRadius:'8px', fontWeight:700, textDecoration:'none', fontSize:'1.1rem', boxShadow:'0 2px 8px #0003'}}>Scarica cartella modello</a>
        </main>
    );
}
