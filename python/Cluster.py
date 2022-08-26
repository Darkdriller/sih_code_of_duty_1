import pandas as pd
from data import state_id,state_city
from leaderboard import leaderboard

def cluster_data(access_token):
    time_ser=pd.read_csv('timeSeries.csv', encoding='ISO-8859-1',on_bad_lines='skip')
    resp={}
    temp=time_ser.loc[time_ser['Clusteridx']==access_token]
    resp["time_series"]=temp.to_dict(orient="records")
    time_ser=pd.read_csv('amnitiesIncluded.csv', encoding='ISO-8859-1',on_bad_lines='skip')
    temp=time_ser.loc[time_ser['Clusteridx']==access_token]
    resp["Ammeneties"]=temp.to_dict(orient="records")
    time_ser_pred=pd.read_csv('finalffreport.csv', encoding='ISO-8859-1',on_bad_lines='skip')
    temp=time_ser_pred.loc[time_ser_pred['Clusteridx']==access_token]
    resp["time_series_pred"]=temp.to_dict(orient="records")
    class_label=pd.read_csv('ClassLabel.csv')
    temp=class_label.loc[class_label["Clusteridx"]==access_token]
    resp["class_label"]=temp.to_dict(orient="records")
    return resp
