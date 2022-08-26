from ast import literal_eval
from http.client import ImproperConnectionState
from re import X
import pandas as pd
from data import state_id
def leaderboard():
  stLN=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Gujarat","Haryana","Himachal Pradesh","Jammu Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"]
  lb_c=pd.read_csv('ScoreIndia.csv', encoding='ISO-8859-1',on_bad_lines='skip')
  lb_c.round(2)
  result={} 
  for st in stLN:
    temp=lb_c.loc[lb_c['state']==st]
    if len(temp) !=0:
      s=temp['score'].sum()/len(temp)
      result[st]=s
    else:
      print(st)
  lb_s=sorted(result.items(), key=lambda x:x[1],reverse=True)
  df=pd.DataFrame(lb_s,columns=['state','score'])
  state_to_id={}
  for i in state_id:
    state_to_id[i['state']]="IN-"+ i['id']
  df['id']=[state_to_id[x] for x in df['state'].to_list()]
  clst=lb_c.head(len(lb_s))
  villages=clst["villages"]
  clst["villages"]=[literal_eval(i) for i in villages]

  return clst,df

if __name__ == "__main__":
  print(leaderboard())

