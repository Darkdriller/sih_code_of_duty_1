from sre_parse import State
from urllib import response
import pandas
import urllib.parse
import requests



# path to the csv file must be in the same folder as the python file



def get_dist_file(paths):
    for state in paths:
        state_data=pd.read_csv(state)
    address=get_adress(state_data)
    res = {"name":[], "lat":[],"lon":[]}
    for i in address:
        lat_lon=get_lat_long(i)
        if lat_lon:
            res["name"].append(lat_lon[0].split(",")[0])
            res["lat"].append(lat_lon[1])
            res["lon"].append(lat_lon[2])
    df=pd.DataFrame(res)
    df.to_csv(state.split(".")[0]+"_dist.csv")
    





def get_lat_long(address):
    url= "https://nominatim.openstreetmap.org/search/" + urlib.parse.quote(address) + '?format=json'
    response=requests.get(url).json
    if response:
        return (response[0]["display_name"],response[0]["lat"], response[0]["lon"])

def get_adress(table):
            addr=[]
            for i in range(table.shape[0]):
                addr.append(table.iloc[i]["GramPanchayatName"].capitalize() + ","  + table.iloc[i]["BlockName"].capitalize() + "," +table.iloc[i]["DistrictName"].capitalize() + "," + table.iloc[1]["StateName"].capitalize())
            return addr
        
