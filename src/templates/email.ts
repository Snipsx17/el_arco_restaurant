
export const contactFormTemplate = (
  firstName: string,
  lastName: string,
  email: string,
  telephone: string,
  message: string,
) => { return `
<div>
    <table align="center">
        <tr>
            <td>Nombre:</td><td>${firstName} ${lastName}</td>            
        </tr>
        <tr>
            <td>Email:</td><td>${email}</td>            
        </tr>
        <tr>
            <td>Telefono:</td><td>${telephone}</td>            
        </tr>
        <tr>
            <td>Mensaje:</td><td>${message}</td>            
        </tr>
    </table>
</div>`;}