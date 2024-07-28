import axios from "axios";


export const LoadImage = async (selectedImage)=>{
    const formData=new FormData(); 
    formData.append('file',selectedImage);
    formData.append('upload_preset','Mern-Project-portfolio');
    formData.append('cloud_name','dbquca9on'); 

     try {
      if(selectedImage === null)
          return alert("Please Upload an image");
        const res =await axios.post('https://api.cloudinary.com/v1_1/dbquca9on/image/upload',formData)
        return res.data;

     } catch (error) {
        console.log("Error uploading image to cloudinary",error);
     }
    const imageData={
        publicId:data.public_id,
        deleteToken:data.delete_token,
    }
    return imageData;

}