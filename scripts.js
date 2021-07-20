// Initialize getFeedback
(function(w,d,s,u,g,a,b){w['GetFeedbackObject']=g;w[g]=w[g]||function(){
(w[g].q=w[g].q||[]).push(arguments)};a=d.createElement(s),
b=d.getElementsByTagName(s)[0];a.async=1;a.src=u;b.parentNode.insertBefore(a,b)
})(window,document,'script','//websites.cdn.getfeedback.com/embed/hWhuIA0xNu/gf.js','gf')

console.log(!!gtag && 'gtag is loaded');

function usabilla_live(e, object) {
  if(e === 'data') {
    console.log(object);
  }
}

window.usabilla_live = usabilla_live;

function implementExperimentA(value, name) {
  const custom = {
    name,
    value
  };
  const customVariables = { custom };
    if (value ==  '0') {
    // Provide code for visitors in the original.
    window.usabilla_live('data', customVariables);
  } else if (value == '1') {
    // Provide code for visitors in first variant
    window.usabilla_live('data', customVariables);
  } else if (value == '2') {
    // Provide code for visitors in second variant.
    window.usabilla_live('data', customVariables);
  }
}

// function fakeGtag(event, job, data) {
//   const newEvent = event;
//   const newJob = job;
//   const newData = data;
//   if(job === 'optimize.callback') {
//     data.callback('1', 'caseoci4n235t98f');
//   }
// }

// fakeGtag('event', 'optimize.callback', {
//   name: 'caseoci4n235t98f',
//   callback: implementExperimentA,
// })
   
gtag('event', 'optimize.callback', {
    name: '',
    callback: implementExperimentA
 });
