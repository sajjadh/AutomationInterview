// @ts-check
const { test, expect } = require('@playwright/test');
const { get } = require('http');
const { url } = require('inspector');




test('Verify a/b testing page loading successfully', async ({ page }) => {
  
  const navEmergency = page.locator('//a[text()="A/B Testing"]');

  await page.goto('https://the-internet.herokuapp.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Internet/);
  await expect(navEmergency).toBeVisible();
  // Wait for 3 seconds (3000 milliseconds)
  await page.waitForTimeout(3000);
  await navEmergency.click();
// Wait for 3 seconds (3000 milliseconds)
  await page.waitForTimeout(3000);
  const currentURL = page.url();
  expect(currentURL).toEqual("https://the-internet.herokuapp.com/abtest");

});


test('Verify add/remove element page function', async ({ page }) => {
  const navEmergency = page.locator('//a[text()="Add/Remove Elements"]');
  const btnAddElement = page.locator('//button[text()="Add Element"]')
  const btnDeleteElement = page.locator('//button[text()="Delete"]')

  await page.goto('https://the-internet.herokuapp.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Internet/);
  await expect(navEmergency).toBeVisible();
  // Wait for 3 seconds (3000 milliseconds)
  await page.waitForTimeout(3000);
 
  await navEmergency.click();
// Wait for 3 seconds (3000 milliseconds)
  await page.waitForTimeout(3000);
  const currentURL = page.url();
  expect(currentURL).toEqual("https://the-internet.herokuapp.com/add_remove_elements/");
  
  // add remove functions and verification
  await expect(btnDeleteElement).not.toBeVisible();
  await expect(btnAddElement).toBeVisible();
  await btnAddElement.click()
  await page.waitForTimeout(3000);

  await expect(btnDeleteElement).toBeVisible();
  await expect(btnAddElement).toBeVisible();
  await btnDeleteElement.click()
  await page.waitForTimeout(3000);


  await expect(btnDeleteElement).not.toBeVisible();
  await expect(btnAddElement).toBeVisible();

});


test('Verify successfull checkbox funtion ', async ({ page }) => {
  const navEmergency = page.locator('//a[text()="Checkboxes"]');
  const checkBox1 = page.locator('//input[@type="checkbox"]');
  // const checkBox2 = page.locator('//a[text()="Checkboxes"]');

  await page.goto('https://the-internet.herokuapp.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Internet/);
  await expect(navEmergency).toBeVisible();
  // Wait for 3 seconds (3000 milliseconds)
  await page.waitForTimeout(3000);
 
  await navEmergency.click();
// Wait for 3 seconds (3000 milliseconds)
  await page.waitForTimeout(3000);
  const currentURL = page.url();
  expect(currentURL).toEqual("https://the-internet.herokuapp.com/checkboxes");

  //check/uncheck checkbox
  await expect( page.getByRole('checkbox').first()).not.toBeChecked();
  await expect( page.getByRole('checkbox').nth(1)).toBeChecked();
  await  page.getByRole('checkbox').first().check();
  await page.waitForTimeout(3000);
  await expect( page.getByRole('checkbox').first()).toBeChecked();

});



test('Verify checkbox functionality successfully', async ({ page }) => {
  const navEmergency = page.locator('//a[text()="Dropdown"]');
  const dropdown = page.locator('//select[@id="dropdown"]');


  await page.goto('https://the-internet.herokuapp.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Internet/);
  await expect(navEmergency).toBeVisible();
  // Wait for 3 seconds (3000 milliseconds)
  await page.waitForTimeout(3000);
 
  await navEmergency.click();
// Wait for 3 seconds (3000 milliseconds)
  await page.waitForTimeout(3000);
  const currentURL = page.url();
  expect(currentURL).toEqual("https://the-internet.herokuapp.com/dropdown");

  await expect(dropdown).toBeVisible();
  await dropdown.selectOption({ value: '1' });
  await page.waitForTimeout(3000);
  await expect(dropdown).toHaveValue('1');

  await dropdown.selectOption({ value: '2' });
  await page.waitForTimeout(3000);
  await expect(dropdown).toHaveValue('2');

});


test('Verify hover function of an element', async ({ page }) => {
  const navEmergency = page.locator('//a[text()="Hovers"]');
  const hoeverElement1 = page.locator('//img[@src="/img/avatar-blank.jpg"]').first();
  const userName = page.locator('//h5[text()="name: user1"]');

  await page.goto('https://the-internet.herokuapp.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Internet/);
  await expect(navEmergency).toBeVisible();
  // Wait for 3 seconds (3000 milliseconds)
  await page.waitForTimeout(3000);
 
  await navEmergency.click();
// Wait for 3 seconds (3000 milliseconds)
  await page.waitForTimeout(3000);
  const currentURL = page.url();
  expect(currentURL).toEqual("https://the-internet.herokuapp.com/hovers");

  await expect(userName).not.toBeVisible();
  await page.waitForTimeout(3000);
  await hoeverElement1.hover();
  await page.waitForTimeout(3000);
  await expect(userName).toBeVisible();

});

