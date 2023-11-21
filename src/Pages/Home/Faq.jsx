
const Faq = () => {
    return (
        <div className="min-h-screen flex items-center">
            <div>
                <h2 className="text-3xl font-semibold text-center mt-20 mb-4 w-28 pb-1 mx-auto border-b-2 border-secondary">FAQ</h2>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        What services do you offer for event marketing and promotion?
                    </div>
                    <div className="collapse-content text-md px-5">
                        <p>We offer comprehensive event marketing and promotion services, including digital marketing strategies, social media campaigns, and targeted online channel promotions. Our goal is to maximize the reach of your event and enhance audience engagement.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How do you integrate technology into events?
                    </div>
                    <div className="collapse-content text-md px-5">
                        <p>Our technology integration services encompass cutting-edge solutions such as virtual reality (VR), augmented reality (AR), live streaming, and interactive presentations. We tailor these technologies to create immersive and memorable event experiences.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Can you provide a breakdown of your pricing for registration and ticketing services?
                    </div>
                    <div className="collapse-content text-md px-5">
                        <p>Our pricing for registration and ticketing services varies based on the scale and requirements of your event. Please contact us for a customized quote. Starting at $1.99 per attendee, our services ensure efficient and secure ticketing with QR code generation for easy check-in.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How experienced is your team in event planning and coordination?
                    </div>
                    <div className="collapse-content text-md px-5">
                        <p>Our experienced team brings a wealth of expertise in event planning and coordination. With a track record of successful events, we handle everything from venue selection and scheduling to meticulous coordination, ensuring a seamless and memorable event.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Can you share examples of companies you've worked with for sponsorship and partnership management?
                    </div>
                    <div className="collapse-content text-md px-5">
                        <p>We have successfully collaborated with companies such as ABC Corporation and XYZ Innovations for sponsorship and partnership management. Our dedicated approach maximizes sponsor exposure and ensures a mutually beneficial partnership.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What post-event services do you provide, and how can they benefit my event?
                    </div>
                    <div className="collapse-content text-md px-5">
                        <p>Our post-event services include event recap videos, feedback compilation, and detailed post-event reports. These services are designed to capture and leverage the success of your event, providing valuable insights for future improvements.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;