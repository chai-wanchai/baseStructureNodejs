import * as API from '../services/callAPI'
export async function JobCombineData (){
  let DataAPI = await API.JobAPI()
  let jobData = []
  DataAPI.map(item=>{
    let temp = []
    item.data.jobs.forEach(element => {
      if(element.company){
        if (element.company.logo){
          element.company.logo = element.company.logo.replace("/prod/_-x__/logo/","/prod/118x118/logo/")
        }else{
          element.company.logo = 'https://i.vimeocdn.com/portrait/1274237_300x300'
        }        
      }else{
        element.company.logo = 'https://i.vimeocdn.com/portrait/1274237_300x300'
      }
      element.link = `https://jobs.blognone.com/company/${element.company.slug}/job/${element.slug}`
      temp.push(element)
    });
    jobData.push(...temp)
  })
  //console.log(jobData)
  return jobData
}