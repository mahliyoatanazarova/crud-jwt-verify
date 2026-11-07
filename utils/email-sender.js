const nodemailer=require("nodemailer")

 const emailSender = async( emil,code)=>{
   try {
     const transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"mahliyoatanazarova341@gmail.com",
            pass:" process.env.APP_KEY"
        },

     })

      await transporter.sendMail({
        subject :"lesson",
        from:"mahliyoatanazarova341@gmail.com",
        to:`${email}`,
        text:` Tasdiqlash kodi:${code}`
      })

   } catch (error) {
    console.log(error.message);
    
   }
}

module.exports= emailSender