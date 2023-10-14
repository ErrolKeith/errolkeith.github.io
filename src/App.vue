<template>
  <div class="flex flex-col md:flex-row items-start m-2 max-w-[1280px] mx-auto">
    <div class="bg-gray-100 m-2 p-2 md:max-w-[25%] lg:max-w-[20%] rounded-xl shadow-lg">
      <NameAndTitle :name="name" :title="title"/>
      <ContactLinks :email="email" :social-links="socialLinks" />
      <hr class="border-blue-600 border-2 rounded-lg mb-4 -mx-2" />
      <Skills :skills="skills" />
      <Certifications :certifications="certs" />
      <Education :schooling="schooling" />
    </div>
    <PositionList :experience="experience" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ContactLinks from "./components/ContactLinks.vue";
import Education from "./components/Education.vue";
import Certifications from "./components/Certifications.vue";
import Skills from "./components/Skills.vue";
import PositionList from "./components/PositionList.vue";
import NameAndTitle from "./components/NameAndTitle.vue";

const name = ref<string>("Errol Keith");
const title = ref<string>("Software Engineer");
const email = ref<string>("errol.k.keith@gmail.com");

const socialLinks = ref<SocialLink[]>([
  {
    social: 'github',
    uiName: "Github",
    url: 'https://www.github.com/ErrolKeith',
    icon: "logos:github",
  },
  {
    social: 'linkedin',
    uiName: "LinkedIn",
    url: 'https://www.linkedin.com/in/errol-keith/',
    icon: "logos:linkedin",
  }
]);

const schooling = ref<Education[]>([
  {
    degree: "B.S. Software Development",
    school: "Western Governors University",
    gradMonth: "November",
    gradYear: "2021"
  },
  {
    degree: "A.S. Computer Programming & Data Analysis",
    school: "Hillsborough Community College",
    gradMonth: "May",
    gradYear: "2020",
  },
  {
    degree: "Pashto Language Certificate",
    school: "Defense Language Institute",
    gradMonth: "July",
    gradYear: "2010"
  }
]);

const certs = ref(['CompTIA Project+', 'CIW UI Designer']);

const skills = ref([
  'HTML', 
  'CSS',
  'JavaScript',
  'TypeScript',
  'VueJS',
  'NodeJS',
  'PHP',
  'WordPress',
  'Git',
  'AWS',
  'MongoDB',
  'PostgreSQL',
  'Docker'
]);



const experience = ref<Experience[]>([{
  title: "Software Engineer",
  company: "Socius Marketing (EverCommerce)",
  startEndDate: "Oct 22 - Present",
  detailItems: [
    "Work with an iterative approach to deliver features and bug fixes for a public facing SaaS platform.",
    "Work closely with product owners to design and build new features and products based on customer feedback and business requirements.",
    "Maintain a deep curiosity and motivation to continue to develop as a Software Engineer.",
    "Continually seek out and build or refine processes that set the organization up for long term success.",
    "Maintain tested, readable, stable, and organized code by participating in reviews and providing meaningful feedback."
  ]
},
{
  title: "WordPress Developer",
  company: "Socius Marketing (EverCommerce)",
  startEndDate: "Aug 21 - Sept 22",
  detailItems: [
    "Created custom integrations for multiple CRM platforms including Salesforce, Hubspot, and NetSuite.",
    "Created a new client lead generation process that significantly reduced the manpower requirements to accomplish the same task.",
    "Created standard operating procedures, documentation, and training materials on legacy codebases and systems that were otherwise ambiguous and unclear to the organization.",
    "Created experimental products to test new markets and technologies.",
    "Use HTML / CSS / JavaScript to develop visually stunning user-driven websites.",
    "Maintain familiarity with content management and eCommerce solutions such as WordPress, Joomla, and Magento.",
    "Work within current creative team to develop and maintain highly visible client web sites.",
    "Developing and supporting reusable internal tools to support the Design and Sales departments.",
    "Set up, manage, and configure hosting environments.",
    "Proactively perform cross-browser testing and optimizations in performance and accessibility.",
    "Maintain well-documented, reusable, and transferrable code.",
    "Maintain working knowledge of new development software, trends, and practices."

  ]
},
{
  title: "Shopify Developer",
  company: "HTM Lighting Solutions",
  startEndDate: "Apr 21 - Jun 21",
  detailItems: [
    "Displayed and maintained knowledge of building, launching and maintaining stores, as well as general knowledge of the admin system.",
    "Utilized Shopify's theming system and Liquid templating.",
    "Improved development processes by implementing the Shopify Theme Kit to improve product delivery speeds.",
    "Designed and coded responsive layouts for desktop, tablet, and mobile.",
    "Maintained standards for accessibility and performance of all websites.",
    "Designed, developed, and deployed custom site functionality using Web APIs."
  ]
},
{
  title: "Web Developer",
  company: "Main Contact Distribution Center",
  startEndDate: "Jan 21 - Apr 21",
  detailItems: [
    "Oversee web development projects from start to finish.",
    "Created complete clone of a Shopify website on a separate ecommerce platform in order to utilize one platforms backend with the others front end.",
    "Rebuilt an outdated ecommerce website to be mobile responsive with an updated theme and branding.",
    "Work in unison with media and marketing team members and management to maintain consistent branding across all websites.",
    "Collaborate with graphic designers to create high-quality images optimized for web performance.",
    "Manage multiple ecommerce stores with 10K+ products."
  ]
},
{
  title: "Web Development Intern",
  company: "Fat Dog Spirits",
  startEndDate: "Jun 20 - Sept 20",
  detailItems: [
    " Maintained, updated, and managed four websites using scripting languages, content creation tools, management tools, and digital media.",
    "Created, modified, and maintained WordPress themes using HTML, CSS, JavaScript, and PHP.",
    "Worked cooperatively with the marketing team to keep websites coordinated with current marketing campaigns."
  ]
},
{
  title: "Production Supervisor",
  company: "Southwire Company",
  startEndDate: "Jan 14 - Jun 18",
  detailItems: [
    "Enforced and maintained safety policies.",
    "Maintained logbooks, records, and schedules.",
    "Worked in teams and independently to overcome obstacles and meet goals.",
    "Facilitated open, effective, and consistent lines of communication with multiple groups.",
    "Continually sought process improvement in all aspects of the business.",
    "Met strict deadlines on a consistent basis."
  ]
},
{
  title: "Sergeant (E-5)",
  company: "United States Marine Corps",
  startEndDate: "Jan 09 - Jan 14",
  detailItems: [
    "Performed under the titles: Instructor/Trainer, Team Leader,Pashto Linguist, and Signals Intelligence Operator.",
    "Created and analyzed charts, tables, spreadsheets, and databases.",
    "Practiced linguistic skills with foreign nationals regularly.",
    "Practiced quality control on all reports before mass distribution.",
    "Established network drives for access to different servers.",
    "Maintained encrypted satellite dishes, routers, and switches."
  ]
}]);
</script>

<style scoped>
.page {
  grid-template-columns: 25% auto;
}
</style>
