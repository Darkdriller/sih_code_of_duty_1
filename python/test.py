


from lib2to3.pgen2 import token
from os import access
import pandas as pd
from data import state_id,state_city
from leaderboard import leaderboard
def state_data(access_token):
    lb_c=pd.read_csv('amnitiesIncluded.csv', encoding='ISO-8859-1',on_bad_lines='skip')
    resp={}
    for i in state_id:
        if access_token == i["id"]:
            resp["state"]=i["state"]
            resp["no_clusters"]=i["value"]
            resp["no_districts"]=len(state_city[i["state"]])
            a,b=leaderboard()
            rank=b.index[b['state']==i["state"]].to_list()[0] +1
            resp["rank"] = rank
            temp=lb_c.loc[lb_c['state']==i["state"]]
            resp["state_data"]=temp.to_dict(orient="records")
    return resp
def main():
    for i in state_id:
        access_token=i["id"]
        try:
            resp=state_data(access_token)
        except:
            continue
        print(resp["state"], len(resp["state_data"]))
if __name__ == "__main__":
    main()

