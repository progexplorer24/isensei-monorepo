import Link from "next/link";
import SectionContainer from "../components/SectionContainer";

const AboutPage = () => (
  <SectionContainer>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        Go home
      </Link>
    </p>
  </SectionContainer>
);

export default AboutPage;
