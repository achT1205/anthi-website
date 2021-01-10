<template>
  <div class="page work-with-me">
    <h2 class="custom-title">Job Opportunities</h2>
    <p>
      I am hiring graduate students for a fully funded 5-year
      <strong>Ph.D.</strong> at Utrecht University in the area of interactive
      <strong>information visualization</strong>, human-computer interaction,
      and ubiquitous computing. <strong>Multidisciplinary</strong> backrounds
      are more than welcome (see the bottom of the pyramid in my research page).
      While you will primarily work with me, you will also have many
      opportunities to interact with other faculty members and students both
      within the VIG team and the visualization community worldwide.
    </p>
    <p>
      interfaces. Please have a careful read of my research page and recent
      publications before applying. I also enjoy working with students who have
      their own ideas and are passionate about their research. Yet, to be a good
      match together, it will help if your interests involve a
      <strong>decision making task</strong>, an <strong>interface</strong> and a
      <strong>human being </strong> the loop.
    </p>
    <h3 class="custom-sub-title">Expected research qualifications</h3>
    <p>
      Research is an exciting trip to the “unknown” that includes problem
      solving skills, curiosity, ability to cope with uncertainty, writing,
      reading, presentation and communication skills (mainly in
      <strong>English</strong>), as well as empathy for the people who will
      benefit from your work . You are not expected to be good at all those
      things before starting a Ph.D. My purpose in your Ph.D. training is to
      support you in developping all these skills, so you will become a
      brilliant <strong>independent</strong> researcher. At this stage, what I
      need from you is good “signs” that you have the potential to develop such
      skills at the timeframe of your Ph.D. The more of those skills I identify
      in your application, the more excited I will feel about it.
    </p>
    <h3 class="custom-sub-title">Expected technical qualifications</h3>
    <p>
      The expected technical qualifications depend a lot on the type of your
      research project. For example, most PhD topics in visualization require
      students who can <strong>code</strong> their own visualizations (e.g.,
      know d3.js) and develop a platform for online user experiments. Such
      programming skills would be a bonus in your application. Some prior
      knowledge in <strong>data visualization,</strong>,
      <strong>experiment design</strong> and
      <strong>statistical analysis</strong>, too. If you do not have yet some of
      these skills, but you have a strong motivation in working
      (<strong>autonomously</strong>) on obtaining them, please try to
      demonstrate this in your application. Moreover, if you consider that some
      technical skills are not so important for the type of research you want to
      do, please explain this in your application. In case now that you are
      interested in a more technically demanding topic (e.g., see the top of the
      pyramid in my research page), then you might need to have a skillset in
      AI/ML/data analytic techniques. However, my research is on the integration
      of such algorithms within a user interface. This means that if you would
      like to work solely on, e.g., improving ML models without a human user in
      the loop, given that this is not my area of expertise, I might not be the
      best advisor for you.
    </p>
    <h3 class="custom-sub-title">Interested?</h3>
    Send me an email at <strong>evanthia.dimara@gmail.com</strong> with:
    <v-flex class="ml-8 mt-7">
      <v-row
        v-for="(interested, index) in interesteds"
        :key="index"
        class="interested-row"
      >
        <v-col cols="1"><v-icon x-small> far fa-circle</v-icon></v-col>
        <v-col clos="11"
          ><p class="interested">{{ interested }}</p></v-col
        >
      </v-row>
    </v-flex>
    <h3 class="custom-sub-title">Important remarks</h3>
    <p>
      An honest and grounded decsription of your strong and weak points will be
      highly appreciated. If your email reads too generic, indicating that you
      are not familiar with my research, you might not get a response. Students
      from historically minoritized groups are strongly encouraged to apply.
    </p>
  </div>
</template>
<script>
export default {
  name: "WorkWithMe",
  data() {
    return {
      interesteds: [
        "a subject header that starts with the phrase “[Prospective Student]”",
        "your time constraints (e.g., possible starting date) for migrating to Utrecht.",
        "your CV",
        "a brief decsription of your research interests along with your first thoughts on the project you would be interested in working on (either something I am working on or a topic of your choice).",
        `a brief description of your technical skills (or skills you lack, but you are motivated to obtain).
There is no need to list everything you know, but only refer to skills that you think that could be relevant to your project. Such description can include: programming skills for developping visualizations/online experiment plattforms
or relevant software you are familiar with, or your skills in experiment design, statistics and data analysis,
or more special skills in case your project involves AI/ML/advanced analytics.`,
        "a document you have written (e.g., a publication , a report , a dissertation, etc ).",
        "a short paragraph explaining why you would like to work with me.",
      ],
    };
  },
  components: {},
};
</script>
<style scoped>
.interested {
  margin-left: -45px;
}
.interested-row {
  margin-top: -30px;
}
</style>