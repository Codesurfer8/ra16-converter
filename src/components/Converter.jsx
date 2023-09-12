import * as hexToRGB from 'pretty-easy-hex-to-rgb';

function Converter({error, form, valid, handleChange}) {

    return (
        <div className="container">
            <input
             className="input"
             value={form}
             name="backgroundColor"
             onChange={handleChange}/>
            {/* <div className="output">{valid ? `rgb(${hexToRGB(form)})` : error}</div> */}
            <div className="output">{valid ? `rgb (${hexToRGB(valid)})` : error}</div>
        </div>
    )
}

export default Converter