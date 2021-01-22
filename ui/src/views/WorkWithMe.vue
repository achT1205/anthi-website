<template>
  <div class="page work-with-me">
LALALA

      I am hiring graduate students for a fully funded 5-year <span class="give-emphasis"> Ph.D.</span> position 
      at Utrecht University in the area of interactive <span class="give-emphasis"> information visualization</span>, 
      human-computer interaction, and ubiquitous computing. 
      <span class="give-emphasis"> Multidisciplinary</span> backrounds are more than welcome (see the bottom of the pyramid in my research page). 
      While you will primarily work with me, you will also have many opportunities to interact with other 
      faculty members and students both within the <a class="discrete-link" href="https://vig.science.uu.nl/" target="_blank">VIG team </a> and the visualization community worldwide. 
      Your Ph.D. will be co-supervised with Prof. <a class="discrete-link" href="https://webspace.science.uu.nl/~telea001/" target="_blank"><span class="give-emphasis"> Alex Telea </span> </a> (<span class="give-emphasis"> by 10%</span>).
      The position involves relocation to the beautiful and vibrant city of 
       <a class="discrete-link" href="https://vig.science.uu.nl/" target="_blank"> Utrecht </a> in the Netherlands. 

<br/><br/>
    I am seeking for bright and energetic students to work with me in the exciting landscape of decision making 
    with data interfaces. 
    Please have a careful read of my research page and my selected publications before applying. 
    I also enjoy working with students who have their own ideas and are passionate about their research. 
    Yet, to be a good match together, it will help if your interests involve a 
    <span class="give-emphasis"> decision making task</span>, 
    an <span class="give-emphasis">interface</span> and a 
    <span class="give-emphasis">human being</span> in the loop.

  

  <h2 class="job-ad-subtitle">Expected research qualifications</h2>



    Research is an exciting trip to the “unknown” that includes problem solving skills, curiosity, 
    ability to cope with uncertainty, writing, reading, presentation and 
    communication skills (mainly in <span class="give-emphasis">English</span>), 
    as well as empathy for the people who will benefit from your work . 
    You are not expected to be good at all those things before starting a Ph.D. 
    My purpose in your Ph.D. training is to support you in developing all these skills, 
    so you will become a brilliant <span class="give-emphasis">independent</span> researcher. 
    At this stage, what I need from you is good “signs” that you have the potential to develop such skills 
    at the timeframe of your Ph.D. This means that the more of those skills I identify in your application, 
    the more excited I will feel about it.



  

    <h2 class="job-ad-subtitle">Expected technical qualifications</h2>

    The expected technical qualifications depend on the type of your research project. 
    For example, most Ph.D. topics in visualization require students who can 
    <span class="give-emphasis">code</span> their own interactive visualizations (e.g., to know d3.js) 
    and develop a platform for online user experiments. Such programming skills would be a bonus in your application. 
    Some prior knowledge in 
    <span class="give-emphasis">data visualization</span>, 
    <span class="give-emphasis">experiment design</span> and 
    <span class="give-emphasis">statistical analysis</span>, too. 
    If you do not have yet some of these skills, but you have a strong motivation in working 
    (<span class="give-emphasis">autonomously</span>) on obtaining them, 
    please try to demonstrate this in your application. 
    In case you consider that certain technical skills are not critical for the type of research you want to do, 
    please explain this in your application. 
    In case now that you are interested in a more technically demanding topic 
    (e.g., see the top of the pyramid in my research page), then you might need to have 
    a skillset in AI/ML/data analytic techniques. You should have in mind, though, 
    that my research focus is on the integration of such algorithms within a user interface. 
    This means that if you would like to focus solely on, e.g., improving ML models without a human user in the loop, 
    given that this is not my area of expertise, I might not be the best advisor for you.
    
     
    

      <h2 class="job-ad-subtitle">Interested?</h2>


    Send me an email with:
    <ul class="mt-4 mb-4" style="list-style:none;">
      <li
        v-for="(interested, index) in interesteds"
        :key="index"
        style="margin-bottom:5px;"
      >
        <v-icon x-small> far fa-circle</v-icon>
        {{ interested }}
      </li>
    </ul>
    <h3 class="job-ad-subtitle">Important remarks</h3>
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
        "A subject header that starts with the phrase “[Prospective Student]”.",
        "A paragraph explaining why you would like to work with me.",
        "A decsription of your research interests along with your first thoughts on the project you would be interested in working on (either something I am working on or a topic of your choice).",
        "A demostration of your technical skills or skills you lack, but you are motivated to obtain. There is no need to list everything you know, but only refer to skills that you think that could be relevant to your project. Such description can include: programming skills for developping visualizations/online experiment plattforms (e.g., you github account) or relevant software you are familiar with, or your skills in experiment design, statistics and data analysis, or more special skills in case your project involves AI/ML/advanced analytics.",
        "A document you have written (e.g., a publication, a report, a dissertation, etc ).",
        "Your time constraints (e.g., possible starting date) for migrating to Utrecht.",
        "Contact details of 2 or 3 referees.",
        "Your CV.",
      ],
    };
  },
  components: {},
};
</script>
<style lang="scss" scoped>

.job-ad-subtitle{
  color: $gold;
  font-weight: 400;
  opacity: 99%;
  font-size: 19px;
  margin-top:20px;

}
.interested {
  margin-left: -45px;
}
.interested-row {
  margin-top: -30px;
}

.give-emphasis{
  font-weight: 500;
}

.give-more-emphasis{
  font-weight: 500;
  color:$gold;
}
.work-with-me{
  font-weight: 300;
  font-size: 17px;
  padding-left:30px;
}

.v-application a {
  color: $darkenBrown;
}
</style>