from ast import literal_eval
from cProfile import label
import imp
from tokenize import String
from turtle import st
from data import state_city;
import pandas as pd

def handle_search(flag:String,data):
    df=pd.read_csv("amnitiesIncluded.csv")
    if flag=="st":
        return [{"value": i, "label":i} for i in list(state_city.keys())]
    if flag=="st-dst":
        if data:    
            xd=df.loc[df["state"]==data["value"]]
            res=xd["district"].unique().tolist()
            return [{"value":i,"label":i} for i in res]
        else:
            return[{"value":"null","label":"null"}]
        
        
    if flag=="st-dst-pct":
        if data:    
            xd=df.loc[df["state"]==data[0]["value"]]
            xd2=xd.loc[xd["district"]==data[1]["value"]]
            res=xd2["villages"].tolist()
            res=[literal_eval(village) for village in res]
            results=[]
            for  i in res:
                for j in i:
                    results.append(j)
            # res=res.loc[res["district"]]
            return [{"value":i,"label":i} for i in results]
        else:
            return[{"value":"null","label":"null"}]

    if flag =="clst":
        if data:    
            xd=df.loc[df["state"]==data[0]["value"]]
            xd2=xd.loc[xd["district"]==data[1]["value"]]
            villages=xd2["villages"].to_list()
            # print(villages)
            for i in range(len(villages)):
                if data[2]["value"] in villages[i]:
                    res=xd2.iloc[[i]]
                    return res.to_dict(orient="records")
        else:
            return "null"
            