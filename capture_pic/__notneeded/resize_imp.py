import PIL
import os
import os.path
from PIL import Image

f = r'C:/xampp/htdocs/ML_Emotion_recognition/capture_pic/images/'
for file in os.listdir(f):
    f_img = f+"/"+file
    img = Image.open(f_img)
    img = img.resize((48,48))
    img.save(f_img)
    
    img = Image.open(f_img).convert('L')
    img.save(f_img)