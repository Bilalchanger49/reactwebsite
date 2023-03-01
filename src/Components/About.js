//import React,{useState} from 'react'

export default function About(props) {
    /*const [MyStyle, setMystyle] = useState({
            color: 'white',
            backgroundColor: 'black'
    })*/

   // const [btnText, setbtnText] = useState("Enable Light Mode")

    /*const toogleStyle = () => {
        if(MyStyle.color ==='white'){
            setMystyle({
                color: 'black',
                backgroundColor: 'white',
                border: '1px solid black'
            })
            setbtnText("Enable Dark Mode")

        }
        else{
            setMystyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setbtnText("Enable Light Mode")
        }
    } */

    return (
        <div className={`container bg-${props.mode}`} style={{color: props.mode ==='dark'?'white':'black' }} >
            <h1 className='my-3'>About Us</h1>
            <div className={`accordion-item bg-${props.mode}`} id="accordionExample">
                <div className={`accordion-item bg-${props.mode}`}  style={{color: props.mode ==='dark'?'white':'black' }}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className={`accordion-button bg-${props.mode}`}  style={{color: props.mode ==='dark'?'white':'black' }} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show"  aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the.accordion-body, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode}`} style={{color: props.mode ==='dark'?'white':'black' }}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className={`accordion-button collapsed bg-${props.mode} `}  style={{color: props.mode ==='dark'?'white':'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the.accordion-body, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode}`} style={{color: props.mode ==='dark'?'white':'black' }}>
                    <h2 className="accordion-header" id="headingThree">
                        <button  className={`accordion-button collapsed bg-${props.mode} `}  style={{color: props.mode ==='dark'?'white':'black' }} type="button" data-bs-toggle="collapse"  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse"  aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the.accordion-body, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}