import { useEffect } from "react";
import logo from "~/../public/img/pc.png";

export default function Index() {
  useEffect(() => {
    // Dynamically load the hCaptcha script
    const script = document.createElement("script");
    script.src = "https://js.hcaptcha.com/1/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="inner-content">
      <div className="text">
      <p>Fighting for Canada.</p>
      <p>Now is the time for <u>ALL</u> progressive conservatives to unite and stand together — not turn our backs and hold our heads low in defeat. Because that's <u>exactly</u> what the Liberals want us to do!</p>
      <p>We must unite so we can be in a strong position to win the House of Commons and STOP Carney's radical agenda tout suite.</p>
      <p>Thank you for your loyal support to the PC Party and our future!!</p>
      </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
          <p><input className="email" type="email" name="email" required placeholder="Email" /></p>
          <p><input className="submit" type="submit" value="Get access" /></p>
          <div className="h-captcha" data-sitekey="db0e76a6-3d84-4378-abe6-88526faac9d2"></div>
          <input id="3a575" type="hidden" name="l" checked value="3a575627-dc5a-4d06-b627-05ca13da2e85" />
          <input type="hidden" name="nonce" />
      </form>
      </div>
      </div>
  );
}