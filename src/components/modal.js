import React from 'react';

const modal = (props) => {
    return (
        <div>
            <div className="fixed h-screen flex items-center justify-center bg-white"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {/* <div className="relative w-full bg-white shadow-lg rounded-lg py-2 px-4">
                    <h3>Modal Header</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div> */}
                <div className="relative w-full bg-white shadow-lg rounded-lg py-2 px-4">
                    <p>
                        {props.children}
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>CLOSE</button>
                    <button className="btn-continue">CONTINUE</button>
                </div>
            </div>
        </div>
    )
}

export default modal;