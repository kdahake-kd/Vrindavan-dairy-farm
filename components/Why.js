import './Why.css';

export const Why=()=>{
    return(
        <div className="another" >
          <div>
            <div data-aos="fade-right">
                <img src={require('./Why/ghee.jpg')} width="450px" height="450px" style={{
                    position:"relative",
                    left:'9%',
                    top:"220px",
                    boxShadow:"1px 2px 10px 10px grey",
                }} ></img>
            </div>
            <div className='weather' >
                <div className='thunder'>
                <h2 style={{
                    position:"absolute",
                    right:"500px",
                    top:"700px",
                    color:"white"
                }} >क्यों चुनें ए2 दूध ?</h2>
                </div>
                <div className='ninja' data-aos="fade-left">
                  <p style={{
                     position:"relative",
                     left:"700px",
                     bottom:"250px",
                     fontSize:"18px",
                     color:"blue",
                     width:"700px"
                     }}>ए2 दूध को सामान्य ए1 दूध की तुलना में पचाने में अधिक आसान माना जाता है, जो कुछ<br></br><br></br>लोगों के लिए असुविधा का कारण बन सकता है। यह एक प्राकृतिक, पोषक तत्वों से भरपूर<br></br><br></br>विकल्प है, जो समग्र स्वास्थ्य में सुधार करने के इच्छुक लोगों के लिए विशेष रूप से बच्चों,<br></br><br></br>बुजुर्गों और डेयरी संवेदनशीलता वाले लोगों के लिए फायदेमंद है।</p>
                </div>
                <div className='david' data-aos="fade-right">
                <p style={{
                     position:"relative",
                     left:"700px",
                     bottom:"230px",
                     fontSize:"18px",
                     color:"blue",
                     width:"700px"
                }}>वृंदा ए2 मिल्क में, हम आपको स्वाद या गुणवत्ता से समझौता किए बिना स्वस्थ विकल्प<br></br><br></br>चुनने में मदद करने के लिए प्रतिबद्ध हैं। वृंदा नाम वाला हर उत्पाद हमारी इस प्रतिबद्धता<br></br><br></br>का प्रमाण है कि हम आपको प्रकृति का सर्वोत्तम देने के लिए समर्पित हैं।</p>
                </div>
                <h2 style={{
                    position:"relative",
                    left:"900px",
                    bottom:"220px",
                    color:"lawngreen"
                }} className='mainheading' >हमारा वादा:</h2>
                <div  className='tit'>
                    <ul className="pit" style={{
                        position:"relative",
                        left:"800px",
                        bottom:"200px",
                        display:"block",
                        color:"blue",
                        fontSize:"20px",
                        width:"600px",
                    }}>
                        <li data-aos="fade-left">स्वस्थ और अच्छी देखभाल वाली गायों से 100% प्राकृतिक ए2 दूध</li>
                        <br></br>
                        <li data-aos="fade-right">नैतिक और टिकाऊ खेती की प्रथाएं</li>
                        <br></br>
                        <li data-aos="fade-left">हर उत्पाद में ताजगी और शुद्धता</li>
                        <br></br>
                        <li data-aos="fade-right">स्वास्थ्य और कल्याण के प्रति प्रतिबद्धता</li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    
    )
}