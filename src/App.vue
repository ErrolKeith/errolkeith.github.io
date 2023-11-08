<template>
  <div class="flex flex-col md:flex-row items-start m-2 max-w-[1280px] mx-auto">
    <div class="bg-gray-100 m-2 p-2 md:max-w-[25%] lg:max-w-[20%] rounded-xl shadow-lg">
      <NameAndTitle :name="name" :title="title"/>
      <ContactLinks :email="email" :social-links="socialLinks" />
      <hr class="border-blue-500 border-2 rounded-lg mb-4 -mx-2" />
      <Skills :skills="skills" />
      <Certifications :certifications="certs" />
      <Education :schooling="schooling" />
      <button @click="openContactForm" class="bg-blue-500 font-semibold text-white w-full rounded-md px-4 py-2 mt-8">Contact Errol</button>
    </div>
    <PositionList :experience="experience" />
  </div>
  <ContactForm :class="contactFormClass" @close="hideContactForm" ref="contactForm"/>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import ContactLinks from "./components/ContactLinks.vue";
import Education from "./components/Education.vue";
import Certifications from "./components/Certifications.vue";
import Skills from "./components/Skills.vue";
import PositionList from "./components/PositionList.vue";
import NameAndTitle from "./components/NameAndTitle.vue";
import ContactForm from "./components/ContactForm.vue";

const name = "Errol Keith";
const title = "Software Engineer";
const email = "errol.k.keith@gmail.com";
const contactFormIsHidden = ref<boolean>(true);

const contactFormClass = computed(() => {
  return contactFormIsHidden.value ? "hidden" : "";
});

onMounted(() => {
  document.addEventListener('mouseleave', () => {
    openContactForm();
  })
})

function hideContactForm() {
  contactFormIsHidden.value = true;
}

function openContactForm(){
  contactFormIsHidden.value = false;
}

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
  'NoSQL',
  "SQL",
  'PostgreSQL',
  'Docker'
]);

const experience = ref<Experience[]>([
  {
    title: "Software Engineer",
    company: "Socius Marketing  (EverCommerce)",
    companyDescription: "Socius Marketing is an EverCommerce brand providing marketing technologies as integrated SaaS platforms to small and medium sized businesses in the home renovation and health industries.",
    startEndDate: "Oct 22 - Present",
    detailItems: [
      "Planned, created, and added a feature to a client facing SaaS platform that allows the migration of DNS records from vendor servers into an owned and operated cloud infrastructure allowing for the reduction of 10K USD in monthly capital expenditures.",
      "Implemented customer relationship management system integrations for more than 20 CRM vendors using client specific business logic with the purpose of increasing marketing campaign visibility and improving lead conversion tracking capabilities.",
      "Work on a product team, with an iterative approach, to deliver features and bug fixes to a public facing SaaS platform while working closely with product owners to design and build new features and products based on customer feedback and business requirements.",
      "Provide and receive valuable mentorship, feedback, and coaching in order to continually seek out and build or refine processes that set the organization and individuals up for long-term success, while maintaining a deep curiosity and motivation for career growth.",
      "Provide valuable and responsible feedback in code reviews, pull request reviews, and other quality assurance methods to help with enforcing tested, readable, scalable, and organized code that provides value to the organization."
    ]
  },
  {
    title: "WordPress Developer",
    company: "Socius Marketing (EverCommerce)",
    companyDescription: "Socius Marketing is an EverCommerce brand providing marketing technologies as integrated SaaS platforms to small and medium sized businesses in the home renovation and health industries.",
    startEndDate: "Aug 21 - Sept 22",
    detailItems: [
      "Created standard operating procedures, documentation, recorded presentations and training materials on acquired codebases and systems that were otherwise ambiguous and unclear to the organization.",
      "Reduced manpower requirements by approximately 75% and eliminated the need for code on a repetitive integration task while increasing the overall visibility and improving reporting on multiple monitored integrations.",
      "Created a standalone product and workflow that is utilized to create, update, and track websites whose main purpose is generating leads and monitoring marketing efforts.",
      "Maintained and modified several different customer relationship management system integrations with an excess of 500 unique integrations across multiple owned and operated or vendor managed connection mediums."
    ]
  },
  {
    title: "Shopify Developer",
    company: "HTM Lighting Solutions",
    companyDescription: "HTM Lighting Solutions is an LED lighting supplier that specializes in the wholesale distribution of residential and industrial LED Bulbs & Fixtures.",
    startEndDate: "Apr 21 - Jun 21",
    detailItems: [
      "Displayed and maintained knowledge of building, launching and maintaining stores, as well as general knowledge of the Shopify admin system, Shopify's theming system and Liquid templating.",
      "Designed and coded responsive layouts from low level mockups, while overseeing the entire development process from start to finish.",
      "Designed, developed, and deployed custom site functionality using Web APIs to provide a better user experience and improved product marketing for a storefront that generates in excess of 5M dollars in annual revenue.",
      "Maintained and implemented standards for accessibility and performance of all owned and operated websites."
    ]
  },
  {
    title: "Web Developer",
    company: "Main Contact Distribution Center",
    companyDescription: "Main Contact Distribution Center is owned by Avalanche Corporation. The company's line of business includes the manufacturing, sales, and distribution of motor vehicle parts with additional ventures in podcasting and event management.",
    startEndDate: "Jan 21 - Apr 21",
    detailItems: [
      "Created clones of Shopify storefronts in separate e-commerce platforms in an effort to provide additional conversion opportunities with domains already receiving traffic.",
      "Worked in a cross-functional team to rebuild an outdated e-commerce website to be mobile responsive with an updated theme and branding to match the business vision and branding guidelines.",
      "Worked in unison with media, marketing, management team members to coordinate the website development, marketing, and roadmap for upcoming events, projects, podcasts, and video content.",
      "Managed more than 100 owned and operated websites with multiple storefronts exceeding 10K products."
    ]
  },
  {
    title: "Web Development Intern",
    company: "Fat Dog Spirits",
    startEndDate: "Jun 20 - Sept 20",
    detailItems: [
      "Maintained, updated, and managed four websites using scripting languages, content creation tools, management tools, and digital media.",
      "Created, modified, and maintained WordPress themes using HTML, CSS, JavaScript, and PHP.",
      "Worked with the marketing team to keep websites coordinated with current marketing campaigns."
    ]
  },
  {
    title: "Production Supervisor",
    company: "Southwire Company",
    companyDescription: "Southwire Company is a manufacturer of wire and cable used in the transmission and distribution of electricity.",
    startEndDate: "Jan 14 - Jun 18",
    detailItems: [
      "Met strict deadlines on a consistent basis while enforcing and maintaining, but not sacrificing, company and safety policies.",
      "Worked in teams and independently to overcome obstacles and meet goals by practicing and implementing lean manufacturing principles and processes.",
      "Facilitated open, effective, and consistent lines of communication with multiple groups and continually sought process improvement in all aspects of the business by maintaining logbooks, records, and schedules that provide management the ability to make data driven decisions."
    ]
  },
  {
    title: "Sergeant (E-5)",
    company: "United States Marine Corps",
    companyDescription: "United States Military",
    startEndDate: "Jan 09 - Jan 14",
    detailItems: [
      "Graduated the Defense Language Institute Foreign Language Center (DLIFLC) by completing the 47 week Pashto Language Course and passing the Defense Language Proficiency Test(DLPT) with a level of 2 in reading, 2 in writing, and 1+ is speaking.",
      "Created and analyzed charts, tables, spreadsheets and databases used in generating reports for mass distribution.",
      "Maintained, practiced, and demonstrated Pashto language skills through job responsibilities, continued education, and yearly retesting.",
      "Demonstrated expertise in job responsibilities by creating and delivering structured and regular training, and performing as a subject matter expert to approximately 100 Battalion members.",
      "Established, Configured, and Maintained network drives, encrypted satellite dishes, routers, and switches."
    ]
  }
]);
</script>

<style scoped>
.page {
  grid-template-columns: 25% auto;
}
</style>
