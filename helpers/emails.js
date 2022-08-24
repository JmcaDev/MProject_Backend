import nodemailer from "nodemailer"

export const emailRegistro = async (datos) =>{
    const {email,nombre,token} = datos

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

    //*Informacion email

    const info = await transport.sendMail({
        from:'"MProject - Administrador de Proyectos" <cuentas@mproject.com>',
        to: email,
        subject: "MProject - Verifica tu cuenta",
        text:"Comprueba tu cuenta en MProject",
        html:`<p>Hola: ${nombre} Verifica tu cuenta en MProject</p>
        <p>Tu cuenta ya casi esta lista, solo pulsa el siguiente enlace para verificarla:
        
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Verificar cuenta</a>
        </p>
        <p>Si usted no creo esta cuenta, ignore este correo</p>
        `,
    })
}

export const emailResetPassword = async (datos) =>{
  const {email,nombre,token} = datos

  const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
  });

  //*Informacion email

  const info = await transport.sendMail({
      from:'"MProject - Administrador de Proyectos" <cuentas@mproject.com>',
      to: email,
      subject: "MProject - Restablecer password",
      text:"Restablece tu password",
      html:`<p>Hola: ${nombre} has solicitado restablecer tu password</p>
      <p>Sigue el siguiente enlace para generar un nuevo password:
      
      <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer password</a>
      </p>
      <p>Si usted no solicito este email, ignore este correo</p>
      `,
  })
}