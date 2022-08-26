# import email
# from lib2to3.pgen2 import driver
from logging import exception
# from logging.config import _LoggerConfiguration
from logging.handlers import WatchedFileHandler
from operator import mod
from tokenize import String
from click import option
# from pip import main
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import pandas as pd
import os
import sys
from webdriver_manager.chrome import ChromeDriverManager
import urllib
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
# from geosky import geo_plug
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import MoveTargetOutOfBoundsException
import time
from data import state_city
# import TimeUnit from selenium
gram_list=state_city




def download(State=String, City=String,year=int):
    
    # chrome_options = Options()
    options = webdriver.ChromeOptions() ;
    options.add_experimental_option("detach", True)
    options.add_argument("--start-maximized")
    # options.add_argument("--headless")
    location=r"C:\Users\Dhruv\Desktop\data\{0}\{1}\{2}".format(year,State,City)
    prefs = {"download.default_directory" : location}

    if os.path.exists(location):
        return
    if not os.path.exists(location):
        os.makedirs(location)
    options.add_experimental_option("prefs",prefs)

    url="https://data.gov.in/search?title="  + urllib.parse.quote(State+" "+City + " "+str(year))

    driver = webdriver.Chrome(ChromeDriverManager().install(),options=options)
    # driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    try :
        driver.implicitly_wait(300)
        driver.get(url)
        links=driver.find_elements(By.XPATH,"(//a[contains(text(),'Download')])")
        no_of_links=0
        for i in links:
            try:
                no_of_links+=1
                if no_of_links>3:
                    break
                # actions = ActionChains(driver)
                # actions.move_to_element(i).perform()
                driver.execute_script("window.scrollBy(0 , 200 );") 
                time.sleep(3)
                wait = WebDriverWait(driver, 10);
                try:
                    wait.until(EC.element_to_be_clickable(i)).click()
                    
                except MoveTargetOutOfBoundsException:
                    continue;
                
                
                radio1=driver.find_element(By.XPATH,"//label[contains(text(),'Commercial')]")
                radio2=driver.find_element(By.XPATH,"//label[contains(text(),'Academia')]")
                name=driver.find_element(By.XPATH,"//input[@name='name']")
                email=driver.find_element(By.XPATH,"//input[@name='email']")
                submit=driver.find_element(By.XPATH,"//button[@type='submit']")

            # wait = WebDriverWait(driver, 10);
            # wait.until(EC.element_to_be_clickable(radio1)).click();
                radio1.click()
                radio2.click()
                # radio2.click()
                name.send_keys("djs")
                email.send_keys("swaindhruv28@gmail.com")
                email.send_keys(Keys.RETURN)
                time.sleep(3)
                driver.execute_script("window.scrollBy(0 , 90 );") 
                # driver.execute_script("window.scrollBy(0 , 100 );")
                
                # radio2.click()
                # submit.click()
            except:
                continue
        time.sleep(25)
        driver.close()
    except:
        return
    # for elem in links:
    #     elem.click()
    #     print(elem.get_attribute("href"))
# ammeneties=["Water","Electricity","Connectivity"]
def main():
    if sys.argv:
        year=sys.argv[1]
        print(year)
    for state in gram_list:
        for city in gram_list[state]:
           download(state,city,year)

if __name__=="__main__":
    main()

