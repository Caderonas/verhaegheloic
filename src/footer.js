import React from 'react';
import './footer.scss';

function footer() {
  return (
    <div className="footer" alt="Website's footer">
        <h3> Feel free to contact me !</h3>
        <form>
            <label>Write your mail :</label>
            <input type="textarea" name="message"/>
            <input type="submit" name="Send" />
        </form>
    </div>
    );
}

export default footer;
