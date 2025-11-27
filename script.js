// --- 1. Data Source ---
const companyDetails = {
    name: "TVE Travel Elevator",
    contactPerson: "Manveer",
    address: "Shakti Nagar Colony, Near St. Mary, Bijnor (U.P.)",
    phones: ["+91 8279404446", "+91 6005209377", "+91 8006217116"],
    email: "contact@tvetravelelevator.com"
};

const products = [
    { id: "pass1", category: "Passenger Elevators", name: "Building Passenger Elevator", price: "₹6,00,000 / Piece", image: "", specs: ["10 Persons (1000kg)", "Manual Door", "Simplex Signal"], details: "Designed based on building traffic calculations to ensure efficiency in commercial towers." },
    { id: "pass2", category: "Passenger Elevators", name: "Residential Automatic", price: "₹6,00,000 / Piece", image: "", specs: ["6-10 Persons", "Auto Door", "SS Finish"], details: "Noise-free opening/shutting; available in various travel heights for modern homes." },
    { id: "pass3", category: "Passenger Elevators", name: "MS Passenger Elevator", price: "₹5,70,000 / Piece", image: "", specs: ["10 Persons", "Mild Steel", "110 KG Load"], details: "Premium quality components; suitable for various heights and standard housing." },
    { id: "pass4", category: "Passenger Elevators", name: "Telescopic Door Elevator", price: "₹4,60,000 / Piece", image: "", specs: ["15 Persons", "0.6 m/s Speed", "Manual Door"], details: "Includes overloading alarm and handrails for extra safety." },
    { id: "pass5", category: "Passenger Elevators", name: "Manual Passenger Lift", price: "₹4,50,000 / Piece", image: "", specs: ["13 Persons", "Sharp Machine", "SS Finish"], details: "Manual doors with noise-free operation and robust build quality." },
    { id: "pass6", category: "Passenger Elevators", name: "Auto Door Elevator", price: "₹6,00,000 / Piece", image: "", specs: ["15 Persons", "Geared Traction", "Mild Steel"], details: "Geared traction technology optimized for heavy residential use." },
    { id: "pass7", category: "Passenger Elevators", name: "SS Passenger Elevators", price: "₹6,25,000 / Piece", image: "", specs: ["10 Persons", "High Speed", "Auto Door"], details: "Full Stainless Steel finish for a premium look and corrosion resistance." },
    { id: "pass8", category: "Passenger Elevators", name: "Swing Door Elevator", price: "Ask for Price", image: "", specs: ["18 Persons", "1 m/s Speed", "Swing Door"], details: "Home-door style design; includes Automatic Rescue Device." },
    { id: "home1", category: "Home Elevators", name: "Hydraulic Home Lift", price: "₹6,50,000 / Piece", image: "", specs: ["6 Persons", "0.5 m/s", "No Machine Room"], details: "Affordable unique home lifts designed to fit existing homes without extensive shaft work." },
    { id: "home2", category: "Home Elevators", name: "Residential Traction", price: "₹7,50,000 / Piece", image: "", specs: ["13 Persons", "SS Finish", "Geared Traction"], details: "Reliable residential solution with smooth ride quality." },
    { id: "part1", category: "Elevator Parts", name: "SS-304 Cabins", price: "₹65,000 / Unit", image: "", specs: ["SS 304 (1.2mm)", "13 Persons", "Mirror Finish"], details: "High durability stainless steel cabins with elegant finish." },
    { id: "part2", category: "Elevator Parts", name: "SS Elevator Door", price: "₹8,500 / Unit", image: "", specs: ["Height: 6-7 Ft", "SS (18 Gauge)", "Auto Open"], details: "Standard stainless steel door frames for replacement or new installs." },
    { id: "part3", category: "Elevator Parts", name: "Door Sensors", price: "₹5,500 / Set", image: "", specs: ["50cm Range", "Wireless: 200m", "Anti-interference"], details: "Safety sensors to prevent accidents during door closing." },
    { id: "part4", category: "Elevator Parts", name: "MS Powder Coated Cabin", price: "₹35,000 / Set", image: "", specs: ["Mild Steel", "1000kg", "Powder Coated"], details: "Cost-effective cabin solution with durable coating." },
    { id: "spec1", category: "Specialized Elevators", name: "Hospital Stretcher Lift", price: "₹7,50,000 / Piece", image: "", specs: ["10-26 Persons", "680-1668 kgs", "Deep Car"], details: "Designed to accommodate medical stretchers and equipment comfortably." },
    { id: "spec2", category: "Specialized Elevators", name: "Dumbwaiter", price: "₹4,25,000 / Piece", image: "", specs: ["100-500 kgs", "Industrial Use", "SS Body"], details: "Small freight elevators for food or document transport in hotels and hospitals." },
    { id: "goods1", category: "Specialized Elevators", name: "Goods Cum Passenger", price: "₹7,50,000 / Piece", image: "", specs: ["1-3 Ton", "Mild Steel", "Heavy Duty"], details: "Heavy duty dual-purpose elevator for factories." },
    { id: "cap1", category: "Capsule Elevators", name: "Panoramic Capsule", price: "₹10,00,000 / Piece", image: "", specs: ["10-12 Persons", "Glass Body", "2.0 m/s"], details: "Panoramic glass walls with geared traction technology for malls and hotels." },
    { id: "auto1", category: "Automobile Elevators", name: "Car Elevator", price: "₹11,00,000 / Piece", image: "", specs: ["0-2 Tons", "Mild Steel", "Manual Lock"], details: "Heavy duty lift for car parking and maintenance centers." },
    { id: "serv1", category: "Services", name: "AMC Service", price: "₹15,000 / Year", image: "", specs: ["Annual Maint.", "On-site Service", "24/7 Call"], details: "Comprehensive on-site maintenance service contract." }
];

// --- 2. Helper Logic ---
const getImage = (item) => {
    if (item.image && item.image.trim() !== "") return item.image;
    return `https://placehold.co/600x400/0f172a/FFFFFF?text=${encodeURIComponent(item.name)}`;
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Footer Injection
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('footer-address').textContent = companyDetails.address;
    document.getElementById('footer-email').textContent = companyDetails.email;
    document.getElementById('footer-phones').innerHTML = companyDetails.phones.map(p => `<div>📞 ${p}</div>`).join('');
    
    // 2. Mobile Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isFlex = navMenu.style.display === 'flex';
            navMenu.style.display = isFlex ? 'none' : 'flex';
            if(!isFlex) {
                navMenu.style.flexDirection = 'column'; navMenu.style.position = 'absolute'; navMenu.style.top = '70px'; navMenu.style.left = '0'; navMenu.style.width = '100%'; navMenu.style.background = 'white'; navMenu.style.padding = '20px'; navMenu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            }
        });
    }

    // 3. Hero Animation
    const elevatorMover = document.querySelector('.elevator-cabin-mover');
    const elevatorShaft = document.querySelector('.elevator-shaft');
    if (elevatorMover) {
        let elevatorAnim = gsap.to(elevatorMover, { y: "-380px", duration: 5, ease: "power2.inOut", repeat: -1, yoyo: true });
        if (elevatorShaft) {
            elevatorShaft.addEventListener('mouseenter', () => elevatorAnim.pause());
            elevatorShaft.addEventListener('mouseleave', () => elevatorAnim.play());
        }
    }
    
    // 3b. Background Floors Animation (G to 8)
    const floorContainer = document.getElementById('floor-display');
    if (floorContainer) {
        const floors = ['G', '1', '2', '3', '4', '5', '6', '7', '8'];
        floors.forEach(floor => {
            const div = document.createElement('div');
            div.classList.add('bg-floor-number');
            div.innerText = floor;
            floorContainer.appendChild(div);
        });
        // Scroll the container down infinitely to simulate going UP
        gsap.to(floorContainer, { y: "50%", duration: 12, ease: "linear", repeat: -1, modifiers: { y: gsap.utils.unitize(y => parseFloat(y) % 1500) } });
    }

    // 4. Hero Text Fade In
    if(document.querySelector('.gsap-fade')) {
        gsap.from(".gsap-fade", { y: 30, opacity: 0, duration: 1, stagger: 0.2, ease: "power2.out" });
    }

    // 5. Catalog Rendering
    const productContainer = document.getElementById('product-list-container');
    if (productContainer) {
        const grouped = products.reduce((acc, curr) => {
            (acc[curr.category] = acc[curr.category] || []).push(curr);
            return acc;
        }, {});

        Object.keys(grouped).forEach(category => {
            const categoryId = 'cat-' + category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            const wrapper = document.createElement('div');
            wrapper.id = categoryId; wrapper.style.scrollMarginTop = "100px";
            wrapper.innerHTML = `<h3 class="cat-header">${category}</h3>`;
            const grid = document.createElement('div');
            grid.className = 'grid-layout';

            grouped[category].forEach(item => {
                grid.innerHTML += `
                    <div class="prod-card">
                        <div class="p-img-wrap">
                            <img src="${getImage(item)}" alt="${item.name}" class="p-img">
                        </div>
                        <div class="p-body">
                            <h4 class="p-title">${item.name}</h4>
                            <span class="p-price">${item.price}</span>
                            <p class="p-desc">${item.details}</p>
                            <a href="product-detail.html?id=${item.id}" class="p-link">View Specs →</a>
                        </div>
                    </div>
                `;
            });
            wrapper.appendChild(grid);
            productContainer.appendChild(wrapper);
        });
    }

    // 6. Product Detail (Detail Page Only)
    const detailCard = document.getElementById('detail-card');
    if (detailCard) {
        const urlParams = new URLSearchParams(window.location.search);
        const prodId = urlParams.get('id');
        const product = products.find(p => p.id === prodId);

        if (product) {
            document.getElementById('d-img').src = getImage(product);
            document.getElementById('d-category').textContent = product.category;
            document.getElementById('d-name').textContent = product.name;
            document.getElementById('d-price').textContent = product.price;
            document.getElementById('d-details').textContent = product.details;
            const specsList = document.getElementById('d-specs');
            product.specs.forEach(spec => { const li = document.createElement('li'); li.textContent = spec; specsList.appendChild(li); });
            
            gsap.from(".detail-layout", { y: 20, opacity: 0, duration: 0.8 });

            const recWrapper = document.getElementById('rec-section-wrapper');
            const recTrack = document.getElementById('rec-track');
            const relatedItems = products.filter(p => p.category === product.category && p.id !== product.id);

            if (relatedItems.length > 0) {
                recWrapper.style.display = 'block';
                const createCard = (item) => `
                    <div class="rec-card">
                        <img src="${getImage(item)}" alt="${item.name}" class="rec-img">
                        <div class="rec-body">
                            <h4 class="rec-title">${item.name}</h4>
                            <span class="p-price" style="font-size:0.9rem">${item.price}</span>
                            <a href="product-detail.html?id=${item.id}" class="p-link" style="font-size:0.8rem">View Details</a>
                        </div>
                    </div>
                `;
                let content = relatedItems.map(item => createCard(item)).join('');
                if(relatedItems.length < 3) recTrack.innerHTML = content + content + content + content;
                else recTrack.innerHTML = content + content;
            } else {
                recWrapper.style.display = 'none';
            }
        } else {
            detailCard.innerHTML = "<h2 style='padding:40px; text-align:center'>Product Not Found. <a href='index.html'>Go Home</a></h2>";
        }
    }
});