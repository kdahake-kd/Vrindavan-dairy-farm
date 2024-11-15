import './About.css';

export const About=()=>{
    return(
    <div>
        <div data-aos="fade-left">
            <img src={require("./About/about.jpg")} width="450px" height="450px" 
             style={{
                position:"absolute",
                right:"200px",
                top:"200px",
                boxShadow: "1px 2px 10px 10px grey",
                borderRadius:"5px"
              }}>
            </img>
        </div>
        <div>
            <h1 style={{
                position:"absolute",
                top:"200px",
                left:"100px",
                color:"violet"
            }} className='mainheading'>About Us</h1>
            <p className="first" data-aos="fade-right" style={{
                position:"absolute",
                 top:"270px",
                left:"100px",
                letterSpacing:"2px",
                color:"blue",
                fontSize:"20px"
            }}><b>वृंदा ए2 मिल्क</b> में आपका स्वागत है, जहाँ आपको प्रीमियम, प्राकृतिक और स्वस्थ ए2 <br></br>दूध उत्पाद मिलते हैं। हम ताजे और शुद्ध दूध को सीधे हमारे खेतों से आपके घर तक <br></br>पहुँचाने के प्रति समर्पित हैं, ताकि आप और आपका परिवार सबसे बेहतरीन डेयरी<br></br>अनुभव का आनंद ले सकें।</p>
           <br></br>
           <br></br>
            <p data-aos="fade-left"className="second"style={{
                position:"absolute",
                top:"400px",
               left:"100px",
               letterSpacing:"2px",
               color:"blue",
               fontSize:"20px", 
            }}>वृंदा में, हम शुद्ध ए2 दूध का उत्पादन करने में विशेषज्ञ हैं, जो सामान्य दूध की तुलना<br></br>में बेहतर स्वास्थ्य लाभों के लिए जाना जाता है। हमारी गायों का चयन उनके आनुवंशिक<br></br>वंश के आधार पर किया जाता है ताकि वे केवल ए2 बीटा-कैसिइन प्रोटीन का उत्पादन<br></br>करें, जिससे हमारा दूध पचाने में आसान और स्वास्थ्य के लिए अधिक लाभकारी हो।<br></br>चाहे वह हमारा ताजा दूध हो, घी, मक्खन, या दही, हर उत्पाद गुणवत्ता और शुद्धता के<br></br>प्रति प्रतिबद्धता के साथ तैयार किया जाता है।</p>
        </div>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.6546265720917!2d73.8747016!3d18.453984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb19b7d02e2f%3A0x9bc8eed5287ce5f8!2sVRUNDA%20A2%20MILK%20%26%20MILK%20PRODUCTS!5e0!3m2!1sen!2sin!4v1730122879627!5m2!1sen!2sin" width="100%" height="380" style={{border:"0px",
            position:"absolute",
            bottom:"-500px"
        }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    )
}