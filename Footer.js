import React from 'react';

const Footer = () => {
    const currentDate = new Date();

    const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;

    return (
        <section className="footer">
            <div className="footer-container">
                <p>&copy; {formattedDate} Fernando Garcia, Matheus Frota, Victor</p>
            </div>
        </section>
    );
}

export default Footer;

