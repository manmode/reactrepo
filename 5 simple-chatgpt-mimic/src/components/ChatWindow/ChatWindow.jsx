import { useEffect, useState } from 'react';

function ChatWindow() {
    const [command, setCommand] = useState('try');
    const [responses, setResponses] = useState('');
    let autoResponse = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.';
    const wholeResponse = autoResponse.split(' ');

    useEffect(() => {
        let wordDelay = 100
        // generateResponse
        let i = 0;
        if (responses !== '') {
            for (let word of wholeResponse) {
                console.log(`passing responses`);
                console.log(responses);
                setTimeout(
                    function (_resp, _word) {
                        console.log(`preceived  _resp`);
                        console.log(_resp);
                        return () => setResponses(_resp + ' ' + _word);
                    }(responses, word), i);
                i += wordDelay;
            }
        }

    }, [responses])
    const handleCommandChange = (ev) => {
        // console.log('value changes');
        if (ev.key === 'Enter') {
            // set command
            setResponses(responses + '\n Searching for' + ev.target.value + '\n');
            // clear command
            setCommand('');
        }
    }
    return (
        <>
            <div className="chat-panel m-0 h-75">
                <div className="form-floating">
                    <textarea
                        value={responses}
                        className="h-100 form-control bg-success bg-opacity-25 text-white"
                        placeholder="Leave a comment here"
                        id="floatingTextarea"></textarea>
                </div>
            </div>
            <div className="input-group my-1">
                <span className="input-group-text" id="commandInput">Command</span>
                <input type="text" className="form-control" onKeyDown={handleCommandChange}></input>
            </div>
        </>
    )
}

export default ChatWindow;