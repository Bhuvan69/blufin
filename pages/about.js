import DefaultLayout from "../components/DefaultLayout";
import PageHeader from "../components/PageHeader/PageHeader";

const About = (props) => {
    return (
        <DefaultLayout>
            <div>
                <PageHeader title="About Us" image="background/about.jpg" />
                <div>
                    BluFin is a sports foundation founded by Sharath Gayakwad,
                          Paralympian &amp; Arjuna Awardee to train under privilege kids and
                          specially abled kids with a vision to make them international
              champions.<br />
                    <strong>Vision</strong>: To have over 50% of the athletes
              representing India at the olympics and Paralympics from Blufin.<br />
                    <strong>Mission</strong>: To establish a state of the art sport
                    facilities to train, support and produce international level
                    athletes.
              </div>
            </div>
        </DefaultLayout>
    );
};

export default About;
