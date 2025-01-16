from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Remplace le chemin par celui où tu as téléchargé ChromeDriver
driver = webdriver.Chrome(executable_path="path_to_your_chromedriver")

# Accéder à la page web
driver.get("https://www.example.com")

# Attendre que la page charge (optionnel)
time.sleep(3)

# Trouver un élément sur la page (par exemple, un champ de recherche)
search_box = driver.find_element(By.NAME, "q")  # Remplace "q" par l'attribut correct du champ de recherche sur la page

# Envoyer une requête de recherche
search_box.send_keys("Python")
search_box.send_keys(Keys.RETURN)

# Attendre un peu
time.sleep(3)

# Fermer le navigateur
driver.quit()
