-- SQLBook: Code
-- 1. Retrieve all donors' details
use deadline2;


SELECT * FROM Donor;

-- 2. Find all blood donations made in the last 6 months
SELECT * FROM Donation WHERE Donation_Date >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH);

-- 3. List available blood stock by blood group
SELECT Blood_Type, SUM(Quantity) AS units_available FROM BloodSample GROUP BY Blood_Type;

-- 4. Find donors with a specific blood type (e.g., O+)
SELECT * FROM Donor WHERE Blood_Type = 'O+';

-- 5. Find recipients who requested blood in the last year
SELECT * FROM Request WHERE Request_Date >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR);

-- 6. Identify donors who have donated more than 3 times
SELECT Donor_ID, COUNT(*) AS donation_count FROM Donation GROUP BY Donor_ID HAVING donation_count >= 1;

-- 7. Retrieve details of blood banks that have processed donations
SELECT DISTINCT bb.* FROM BloodBank bb
JOIN BloodSample bs ON bb.Bank_ID = bs.Bank_ID;

-- 8. Check the blood stock levels for each blood group
SELECT Blood_Type, SUM(Quantity) AS total_units_in_500ml FROM BloodSample GROUP BY Blood_Type;

-- 9. Find the total number of donations per donor
SELECT Donor_ID, COUNT(*) AS total_donations FROM Donation GROUP BY Donor_ID;

-- 10. Retrieve contact details of donors who have donated in the past
SELECT d.First_Name, d.Last_Name, d.Contact FROM Donor d
JOIN Donation dn ON d.Donor_ID = dn.Donor_ID;

-- 11. List the most frequently donated blood group, if there are many with maximum donations, 
-- all are listed

SELECT Blood_Type, COUNT(*) AS donation_count
FROM BloodSample
GROUP BY Blood_Type
HAVING COUNT(*) = (
    SELECT MAX(donation_count)
    FROM (
        SELECT COUNT(*) AS donation_count
        FROM BloodSample
        GROUP BY Blood_Type
    ) AS subquery
);


-- 12. Find blood banks that have handled a specific blood type (e.g., A-)
SELECT DISTINCT bb.* FROM BloodBank bb
JOIN BloodSample bs ON bb.Bank_ID = bs.Bank_ID
WHERE bs.Blood_Type = 'A-';

-- 13. Retrieve all pending blood requests
SELECT * FROM Request ORDER BY Request_Date;

-- 14. Find the total quantity of blood requested per blood bank
SELECT Bank_ID, Blood_Type, SUM(Quantity_Required) AS total_requested FROM Request GROUP BY Bank_ID, Blood_Type;

-- 15. Identify the staff members who have collected the most donations
SELECT Staff_ID, COUNT(*) AS total_collections FROM BloodSample GROUP BY Staff_ID ORDER BY total_collections DESC LIMIT 5;

-- 16. List all donors eligible to donate
SELECT * FROM Donor WHERE Eligibility = TRUE;

-- 17. Retrieve details of all blood samples that are about to expire within 3 days
SELECT * FROM BloodSample WHERE Expiry_Date <= DATE_ADD(CURDATE(), INTERVAL 3 DAY);

-- 18. Gives donor for (example A+) blood type request
SELECT * FROM bloodsample WHERE Blood_Type = 'A+' OR Blood_Type = 'A-' OR Blood_Type = 'O+' OR Blood_Type = 'O-';

-- 19. Find all donations made by a specific donor (e.g., Donor ID 5)
SELECT * FROM Donation WHERE Donor_ID = 5;

-- 20. Retrieve all blood donations collected by a specific staff member
SELECT * FROM BloodSample WHERE Staff_ID = 3;

-- 21. Retrieve the most requested blood type in the last 6 months
SELECT Blood_Type, COUNT(*) AS request_count FROM Request WHERE Request_Date >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH) GROUP BY Blood_Type ORDER BY request_count DESC LIMIT 1;
