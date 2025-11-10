import { useState } from "react";

function ConnectPage() {

    const [copied, setCopied] = useState(false);

    function copyContent() {
      const content = document.getElementById('contentToCopy').innerText;
      navigator.clipboard.writeText(content)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); // Hide after 2s
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    }
      
    return (
        <div>
            <h1 className="page-title">CONNECT</h1>

            
            <div className="overlay-container">
                <div className="overlay-1">
                    <div className="circle-overlay"></div>
                    <div className="line-3"></div>
                    <div className="line-4"></div>
                    <div className="line-5"></div>
                </div>

                <div className="overlay-2">
                  <div className="oval-overlay"></div>
                </div>

                <div className="overlay-3">
                    <h1 className="email-90deg">EMAIL</h1>
                    <h1 className="lkd-90deg">LINKEDIN</h1>
                </div>

                <div className="overlay-4">
                    <h1 className="link-overlay">Link  <a href="https://www.linkedin.com/in/-saif-shaikh/" target="blank"><img src="/images/white-external-link.png"></img></a></h1>

                    <h1 id="contentToCopy" className="email-overlay">saif42799@outlook.com <button className="copy-button" onClick={copyContent}><img className="copy-icon" src="/images/copy.png"></img></button></h1>
                    {copied && <p className="copy-message">COPIED!</p>}
                </div>

            </div>
        </div>
    )
}

export default ConnectPage;