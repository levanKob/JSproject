// Sign up validation
function emailCheck(email) {
    return email.indexOf("@") != -1
}

function passwordMatch(password, confirmPassword) {
    return password == confirmPassword
}

function hasLettersInPassword(password) {
    for (let i = 0; i < password.length; i++) {
        const charCode = password.charCodeAt(i)
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            return true
        }
    }
    return false
}

function hasNumbersInPassword(password) {
    for (let i = 0; i < password.length; i++) {
        const charCode = password.charCodeAt(i)
        if (charCode >= 48 && charCode <= 57) {
            return true
        }
    }
    return false
}

function hasSymbolsInPassword(password) {
    const symbolKeyCodes = [33, 34, 35, 36, 37, 38, 40, 41, 42, 44, 46, 58, 60, 62, 63, 64, 94, 123, 124, 125]
    for (let i = 0; i < password.length; i++) {
        const charCode = password.charCodeAt(i)
        if (symbolKeyCodes.includes(charCode)) {
            return true
        }
    }
    return false
}

function getPasswordStrength(password) {
    const hasLetters = hasLettersInPassword(password) 
    const hasNumbers = hasNumbersInPassword(password) 
    const hasSymbols = hasSymbolsInPassword(password) 
    if (hasLetters && !hasNumbers && !hasSymbols) {
        return "weak"
    } else if (hasLetters && hasNumbers && !hasSymbols) {
        return "medium"
    } else if (hasLetters && hasNumbers && hasSymbols) {
        return "strong"
    } else {
        return "very weak"
    }
}

function createStrengthIndicator(strength) {
    const indicatorSpan = document.getElementById("password-strength-indicator") 
    if (!indicatorSpan) {
        const passwordInput = document.getElementById("password") 
        const indicatorSpan = document.createElement("span") 
        indicatorSpan.id = "password-strength-indicator" 
        passwordInput.parentNode.insertBefore(indicatorSpan, passwordInput.nextSibling) 
    }
    indicatorSpan.textContent = "Password Strength: " + strength 
}

const passwordInput = document.getElementById("password") 
passwordInput.addEventListener("input", function () {
    const password = passwordInput.value 
    const strength = getPasswordStrength(password) 
    createStrengthIndicator(strength) 
}) 

function submitForm() {
    const email = document.getElementById("email").value
    const password = passwordInput.value
    const strength = getPasswordStrength(password)
    const confirmPassword = document.getElementById("confirm-password").value
    const firstName = document.getElementById("first-name").value
    const lastName = document.getElementById("last-name").value
    const country = document.getElementById("country").value
    const city = document.getElementById("city").value
    const phoneNumber = document.getElementById("phone-number").value

    if (!email || !password || !confirmPassword || !firstName || !lastName || !country || !city || !phoneNumber)
    {
        alert("Please fill in all the required fields.")
        return
    }

    if (!emailCheck(email)) {
        alert("Please enter a valid email address.")
        return
    }

    if (!passwordMatch(password, confirmPassword)) {
        alert("Passwords do not match.")
        return
    }

    if (strength == "very-weak") {
        alert("Password is too weak.")
        return
    }

    alert("Sign-up successful!")
}

// Slider
let slidePosition = 0
const sliders = document.querySelectorAll(".slider-item")
const totalSlider = sliders.length
const btnPrev = document.querySelector("#btn-prev")
const btnNext = document.querySelector("#btn-next")

function updatePosition(){
    sliders.forEach(slide=>{
        slide.classList.remove("active")
    })

    sliders[slidePosition].classList.add("active")

}

function PrevSlide(){
    if(slidePosition==0)
    {
        slidePosition = totalSlider - 1
    }else{
        slidePosition--
    }
    updatePosition()
}

function NextSlide(){
    if(slidePosition == totalSlider - 1)
    {
        slidePosition = 0
    }else{
        slidePosition++
    }
    updatePosition()
}

// Translation
// const translations = {
//     "en": {
//         "1": "WELCOME TO GAU NEWS",
//         "2": "HOME",
//         "3": "CONTACT US",
//         "4": "SIGN UP FOR THE NEWSLETTER",
//         "5": "ADMIN LOGIN",
//         "6": "NEWS & EVENTS",
//         "7": "Welcome to our News & Events page, where you can stay updated on the latest happenings and upcoming activities.",
//         "8": "Recent News",
//         "9": "1000th newsletter subscriber!",
//         "10": "The semester is ending soon",
//         "11": "Complete redesign of this site",
//         "12": "Upcoming Events",
//         "13": "Final exams coming up, get ready! - January 21, 2024",
//         "14": "Merry Christmas! - December 25, 2023",
//         "15": "End-of-semester Javascript projects - December 29, 2023",
//         "16": "Stay tuned for more updates and mark your calendars for these exciting events!",
//         "17": "PREVIOUS",
//         "18": "NEXT",
//         "19": "Contact Us",
//         "20": "If you have any questions or concerns, feel free to reach out to us. We're here to help!",
//         "21": "Email",
//         "22": "Email: info@gaunews.com",
//         "23": "Phone",
//         "24": "Phone: (+995 32) 220 65 20",
//         "25": "Address",
//         "26": "10 Merab Aleksidze Str., 0160, Tbilisi, Georgia",
//         "27": "Social Media",
//         "28": "Connect with us on social media:",
//         "29": "Admin Login",
//         "30": "Email:",
//         "31": "Password:",
//         "32": "Login",

//     },
//     "ge": {
//         "1": "მოგესალმებით GAU NEWS-ში",
//         "2": "მთავარი გვერდი",
//         "3": "საკონტაქტო ინფორმაცია",
//         "4": "რეგისტრაცია",
//         "5": "სისტემაში შესვლა",
//         "6": "სიახლეები და ივენთები",
//         "7": "მოგესალმებით ჩვენს სიახლეების გვერდზე, სადაც შეგიძლიათ თვალი ადევნოთ უახლეს ამბებს.",
//         "8": "ახალი ამბები",
//         "9": "მე-1000 დარეგისტრირებული მომხმარებელი!",
//         "10": "ეს სემესტრი მალე მთავრდება!",
//         "11": "მთლიანად შეცვლილი საიტი",
//         "12": "მომავალი ივენთები",
//         "13": "ფინალური გამოცდები მოახლოვდა, მოემზადეთ! - 21 იანვარი, 2024",
//         "14": "გილოცავთ შობა-ახალ წელს! - 25 დეკემბერი, 2023",
//         "15": "სემესტრის ბოლო Javascript-ის პროექტები - 29 დეკემბერი, 2023",
//         "16": "თვალი ადევნეთ ახალ ამბებს და ჩაინიშნეთ კალენდარში ყველა საჭირო ინფორმაცია!",
//         "17": "წინა ფოტო",
//         "18": "შემდეგი ფოტო",
//         "19": "დაგვიკავშირდით",
//         "20": "თუ რაიმე შეკითხვა გაქვთ, არ მოგერიდოთ და დაგვიკავშირდით, ყველანაირად დაგეხმარებით!",
//         "21": "ელფოსტა",
//         "22": "ელფოსტა: info@gaunews.com",
//         "23": "ტელეფონი",
//         "24": "ტელეფონი: (+995 32) 220 65 20",
//         "25": "მისამართი",
//         "26": "საქართველო, თბილისი, 0160, მერაბ ალექსიძის ქ. 10",
//         "27": "სოციალური ქსელები",
//         "28": "გამოგვყევი შემდეგ სოციალურ ქსელებზე:",
//         "29": "სისტემაში შესვლა",
//         "30": "ელფოსტა:",
//         "31": "პაროლი:",
//         "32": "შესვლა",
//     }
// }

// function changeLanguage() {
//     const currentLanguage = document.documentElement.getAttribute("data-language")
//     let newLanguage

//     if (currentLanguage == "en") {
//         newLanguage = "ge"
//     } else {
//         newLanguage = "en"
//     }

//     document.querySelectorAll("[data-translate]").forEach(element => {
//         const translationKey = element.getAttribute("data-translate")
//         element.textContent = translations[newLanguage][translationKey]
//     })

//     document.documentElement.setAttribute("data-language", newLanguage)
// }