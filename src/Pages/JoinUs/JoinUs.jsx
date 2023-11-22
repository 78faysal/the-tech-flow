
const JoinUs = () => {
    return (
        <div>
            <div className="h-20"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 max-sm:px-5">
                <img data-aos="zoom-in" src="https://i.ibb.co/Zf2sHW5/onsite-support.jpg" alt="" />
                <div data-aos="zoom-in" className="flex items-center">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold">Apply and be a team Player</h2>
                        <p>If you are passionate about transforming events and ready to embark on a rewarding journey, submit your resume and cover letter to us. Please specify the position you are applying for in the subject line.
                            <br /> <br />
                            Join us in redefining the future of events through technology, innovation, and unparalleled expertise!
                        </p>
                        <button className="btn btn-primary">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;