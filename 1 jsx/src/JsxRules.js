export default function JsxRules() {
    return <div className="jsx-rules">
        <h3>JSX Rules</h3>
        <ol>
            <li>
                <p> use camelcase for element attributes/properties</p>
                <input maxLength={5}></input>
            </li>
            <li>
                <p> boolean properties : write only property name if value is true</p>
                <input disabled></input>
                <input disabled={false}></input>
            </li>
            <li>
                <p> inline styles providede as objects not strings</p>
                <input style={{ color: 'red', width: '500px' }}></input>
            </li>
            <li>
                <p className="my-demo-class"> class attribtue is written as className</p>
            </li>
            <li>
                <p > number attribute should be provided as number </p>
                <div>
                    HTML Syntax<input maxlength="5"></input>
                </div>
                <div>
                    JSX Syntax<input maxLength={5}></input>
                </div>
            </li>
        </ol>
    </div>
}