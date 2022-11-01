import React from 'react'
import { TermsContainer, TermsHeader, TermsSubHeader, TermsContent, TermsP, Br } from './TermsElements'
import {EMAIL_ADDRESS} from '../config'

const Terms = () => {
  return (
    <TermsContainer>
      <TermsHeader>PRIVACY POLICY</TermsHeader>
      <TermsContent>
        <TermsP>
          Ponzi Team (referred to as "us", "we", or "our") operates the website.<br/>
          This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.<br/>
          We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.<br/>        
        </TermsP>
        <TermsSubHeader>I. INFORMATION COLLECTION AND USE</TermsSubHeader>
        <TermsP>
          We collect several different types of information for various purposes to provide and improve our Service to you.<br/><br/>
          
          Types of Data Collected:<br/><br/>

          1.Personal Data<br/>
          While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally, identifiable information may include, but is not limited to:<br/>
          Email address Cookies and Usage Data<br/><br/>
          2.Usage Data<br/>
          We may also collect information that your browser sends whenever you visit our Service or when you access the Service by or through a mobile device ("Usage Data").<br/>
          This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.<br/>
          When you access the Service by or through a mobile device, this Usage Data may include information such as the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data.<br/><br/>
          3.Tracking Cookies Data<br/>
          We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.<br/>
          Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.<br/>
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.<br/>
          Examples of Cookies we use:<br/>
          Session Cookies. We use Session Cookies to operate our Service. Preference Cookies. We use Preference Cookies to remember your preferences and various settings. Security Cookies. We use Security Cookies for security purposes.<br/>
        </TermsP>
        <TermsSubHeader>II. USE OF DATA</TermsSubHeader>
        <TermsP>
          Ponzi Team uses the collected data for various purposes:<br/>
          To provide and maintain the Service<br/>
          To notify you about changes to our Service<br/>
          To allow you to participate in interactive features of our Service when you choose to do so<br/>
          To provide customer care and support<br/>
          To provide analysis or valuable information so that we can improve the Service<br/>
          To monitor the usage of the Service<br/>
          To detect, prevent and address technical issues<br/>
        </TermsP>
        <TermsSubHeader>III. TRANSFER OF DATA</TermsSubHeader>
        <TermsP>
          Your information, including Personal Data, may be transferred to - and maintained on - computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those from your jurisdiction.<br/>
          <br/>
          Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.<br/>
          <br/>
          Ponzi Team will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information<br/>
        </TermsP>
        <TermsSubHeader>IV. DISCLOSURE OF DATA</TermsSubHeader>
        <TermsP>
          Legal Requirements Ponzi Team may disclose your Personal Data in the good faith belief that such action is necessary to:<br/>
          <br/>
          To comply with a legal obligation<br/>
          To protect and defend the rights or property of Ponzi Team<br/>
          To prevent or investigate possible wrongdoing in connection with the Service<br/>
          To protect the personal safety of users of the Service or the public<br/>
          To protect against legal liability<br/>
        </TermsP>
        <TermsSubHeader>V. SECURITY OF DATA</TermsSubHeader>
        <TermsP>
          The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
        </TermsP>
        <TermsSubHeader>VI. SERVICE PROVIDERS</TermsSubHeader>
        <TermsP>
          We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.<br/>
          <br/>
          These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.<br/>
          <br/>
          Analytics We may use third-party Service Providers to monitor and analyze the use of our Service.<br/>
        </TermsP>
        <TermsSubHeader>VII. LINKS TO OTHER SITES</TermsSubHeader>
        <TermsP>
          Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.<br/>
          <br/>
          We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.<br/>
        </TermsP>
        <TermsSubHeader>VIII. CHANGES TO THIS PRIVACY POLICY</TermsSubHeader>
        <TermsP>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.<br/>
          <br/>
          We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.<br/>
          <br/>
          You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.<br/>
        </TermsP>
        <TermsSubHeader>IX. CONTACT US</TermsSubHeader>
        <TermsP>
          If you have any questions about this Privacy Policy, please contact us:<br/>
          <br/>
          Email: {EMAIL_ADDRESS} <br/>
        </TermsP>
      </TermsContent>
    </TermsContainer>
  )
}

export default Terms