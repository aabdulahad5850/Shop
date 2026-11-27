const catalog = [
    {
        id: 1,
        title: "Solar Flare Runner",
        category: "shoes",
        price: 195.00,
        badge: "TOP PICK",
        desc: "Spring-loaded sole with breathable woven upper and grippy street traction.",
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=750&q=80"
    },
    {
        id: 2,
        title: "Aether Wireless Headphones",
        category: "audio",
        price: 250.00,
        badge: "STUDIO",
        desc: "Deep bass tuning, plush ear cups, and 40-hour battery life for all-day listening.",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=750&q=80"
    },
    {
        id: 3,
        title: "Nomad Rolltop Pack",
        category: "packs",
        price: 145.00,
        badge: "NEW",
        desc: "Water-resistant daily pack with padded laptop bay and side bottle pockets.",
        img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=750&q=80"
    },
    {
        id: 4,
        title: "Pulse High Court Sneaker",
        category: "shoes",
        price: 170.00,
        badge: "LIMITED",
        desc: "Structured court silhouette with cushioned insole and crisp panel detailing.",
        img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=750&q=80"
    },
    {
        id: 5,
        title: "Echo Pocket Buds",
        category: "audio",
        price: 129.00,
        badge: "POPULAR",
        desc: "Compact earbuds with quick pairing and pocket-sized charging case.",
        img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=750&q=80"
    },
    {
        id: 6,
        title: "Horizon Chrono Watch",
        category: "packs",
        price: 230.00,
        badge: "CLASSIC",
        desc: "Clean dial watch with scratch-resistant glass and interchangeable strap.",
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=750&q=80"
    },
    {
        id: 7,
        title: "CloudStride Knit Shoe",
        category: "shoes",
        price: 158.00,
        badge: "LIGHT",
        desc: "Featherweight knit trainer built for brisk walks, travel, and daily errands.",
        img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=750&q=80"
    },
    {
        id: 8,
        title: "KeyDeck Compact Board",
        category: "packs",
        price: 185.00,
        badge: "DESK",
        desc: "Crisp tactile mechanical keyboard in a compact aluminum frame.",
        img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=750&q=80"
    },
    {
        id: 9,
        title: "Street & Studio Duo Pack",
        category: "shoes",
        price: 369.00,
        badge: "BUNDLE",
        desc: "Includes Solar Flare Runner and Aether Wireless Headphones together.",
        img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=750&q=80"
    },
    {
        id: 10,
        title: "Midnight Carbon Chronograph",
        category: "packs",
        price: 179.00,
        badge: "FLASH",
        desc: "Numbered limited edition timepiece with matte titanium bezel and sapphire dial.",
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=750&q=80"
    },
    {
        id: 11,
        title: "Dune Low Trainer",
        category: "shoes",
        price: 164.00,
        badge: "CRISP",
        desc: "Suede-accented low profile sneaker with soft collar padding.",
        img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=750&q=80"
    },
    {
        id: 12,
        title: "Studio Monitor Cans",
        category: "audio",
        price: 275.00,
        badge: "PRO",
        desc: "Closed-back reference headphones built for mixing and long sessions.",
        img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=750&q=80"
    },
    {
        id: 13,
        title: "Transit Sling 6L",
        category: "packs",
        price: 112.00,
        badge: "SLIM",
        desc: "Crossbody pack with quick-release buckle and organized inner sleeves.",
        img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=750&q=80"
    },
    {
        id: 14,
        title: "AeroFlex Trail Runner",
        category: "shoes",
        price: 188.00,
        badge: "GRIP",
        desc: "Rugged outsole lugs and reinforced toe cap for mixed terrain.",
        img: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=750&q=80"
    },
    {
        id: 15,
        title: "Pulse Soundbar Mini",
        category: "audio",
        price: 199.00,
        badge: "DESK",
        desc: "Compact desktop speaker with clean acoustic projection and dial control.",
        img: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=750&q=80"
    },
    {
        id: 16,
        title: "Courier Weekender Bag",
        category: "packs",
        price: 215.00,
        badge: "TRAVEL",
        desc: "Spacious cabin-friendly duffle with structured base and shoe pocket.",
        img: "https://www.harberlondon.com/cdn/shop/files/Leather-Weekender-Bag-Harber-London-BK-1-min.jpg?v=1795433841&width=2200"
    }
];

const nodeDetails = {
    1: {
        label: "NODE 01 // SPEED & FOOTWEAR",
        title: "Kinetic Street Footwear",
        detail: "High-rebound soles, breathable knit uppers, and responsive cushioning built for daily movement."
    },
    2: {
        label: "NODE 02 // STUDIO & AUDIO",
        title: "Precision Acoustic Hardware",
        detail: "Tuned wireless sound profiles, low-latency wireless links, and durable metal housings."
    },
    3: {
        label: "NODE 03 // CARRY & FLASH DROPS",
        title: "Everyday Carry & Limited Drops",
        detail: "Weather-sealed packs, numbered timepieces, and timed drops with promo code VORTEX15."
    }
};

const heroRotator = [0, 1, 2];
let rotatorIdx = 0;
let bagList = [];
let savedList = [];
let activeFilter = "all";
let selectedNodes = [];
let promoDiscountRate = 0;

const splashCurtain = document.getElementById("splashCurtain");
const selectorView = document.getElementById("selectorView");
const infoBriefModal = document.getElementById("infoBriefModal");
const enterStoreBtn = document.getElementById("enterStoreBtn");
const nodePassInput = document.getElementById("nodePassInput");
const keyCounterText = document.getElementById("keyCounterText");
const cursorGlow = document.getElementById("cursorGlow");
const scrollLine = document.getElementById("scrollLine");
const itemsGrid = document.getElementById("itemsGrid");
const spotlightCard = document.getElementById("spotlightCard");
const bagDrawer = document.getElementById("bagDrawer");
const savedDrawer = document.getElementById("savedDrawer");
const overlayBg = document.getElementById("overlayBg");
const bagItems = document.getElementById("bagItems");
const savedItems = document.getElementById("savedItems");
const bagCount = document.getElementById("bagCount");
const savedCount = document.getElementById("savedCount");
const bagSub = document.getElementById("bagSub");
const bagDiscount = document.getElementById("bagDiscount");
const bagTotal = document.getElementById("bagTotal");
const noticeBar = document.getElementById("noticeBar");
const noticeText = document.getElementById("noticeText");

function showNotice(msg) {
    noticeText.textContent = msg;
    noticeBar.classList.add("show");
    clearTimeout(window.noticeTimer);
    window.noticeTimer = setTimeout(() => {
        noticeBar.classList.remove("show");
    }, 2400);
}

function syncNodeSelectionUI() {
    document.querySelectorAll(".box122").forEach(btn => {
        btn.classList.toggle("unlocked", selectedNodes.includes(btn.dataset.node));
    });
    keyCounterText.textContent = `${selectedNodes.length} / 3`;
    const hasPass = nodePassInput.value.trim().toUpperCase() === "VX-77";
    enterStoreBtn.classList.toggle("ready", selectedNodes.length > 0 || hasPass);
}

document.querySelectorAll(".box122").forEach(nodeBtn => {
    nodeBtn.addEventListener("click", function () {
        const id = this.dataset.node;
        const pos = selectedNodes.indexOf(id);
        if (pos === -1) {
            selectedNodes.push(id);
        } else {
            selectedNodes.splice(pos, 1);
        }
        syncNodeSelectionUI();
    });
});

nodePassInput.addEventListener("input", syncNodeSelectionUI);

document.getElementById("fillPassBtn").addEventListener("click", () => {
    nodePassInput.value = "VX-77";
    if (selectedNodes.length === 0) {
        selectedNodes = ["1", "2", "3"];
    }
    syncNodeSelectionUI();
    showNotice("Passcode VX-77 filled");
});

function openBriefForSelection() {
    const passOk = nodePassInput.value.trim().toUpperCase() === "VX-77";
    let activeList = [...selectedNodes];

    if (activeList.length === 0 && passOk) {
        activeList = ["1", "2", "3"];
    }

    if (activeList.length === 0) {
        showNotice("Tap a node or enter VX-77");
        return;
    }

    const sorted = activeList.sort();

    if (sorted.length === 3) {
        document.getElementById("briefBadge").textContent = "ALL 3 NODES SELECTED";
        document.getElementById("briefTitle").textContent = "Complete Vortex Ecosystem";
        document.getElementById("briefDesc").textContent = "You unlocked all three directions together: high-response footwear, precision studio audio, and limited carry drops.";
    } else {
        const single = nodeDetails[sorted[0]];
        document.getElementById("briefBadge").textContent = single.label;
        document.getElementById("briefTitle").textContent = single.title;
        document.getElementById("briefDesc").textContent = single.detail;
    }

    document.getElementById("briefCards").innerHTML = sorted.map(num => {
        const item = nodeDetails[num];
        return `
            <div class="brief-box">
                <strong>${item.label}</strong>
                <span>${item.detail}</span>
            </div>
        `;
    }).join("");

    selectorView.classList.add("hidden-view");
    infoBriefModal.classList.add("active");
}

enterStoreBtn.addEventListener("click", openBriefForSelection);

document.addEventListener("keydown", e => {
    if (e.key === "Enter" && !splashCurtain.classList.contains("dismissed") && !infoBriefModal.classList.contains("active")) {
        e.preventDefault();
        openBriefForSelection();
    }
});

document.getElementById("backToNodesBtn").addEventListener("click", () => {
    infoBriefModal.classList.remove("active");
    selectorView.classList.remove("hidden-view");
});

document.getElementById("goToSiteBtn").addEventListener("click", () => {
    splashCurtain.classList.add("dismissed");
});

document.getElementById("skipUnlockBtn").addEventListener("click", () => {
    splashCurtain.classList.add("dismissed");
});

document.getElementById("replayIntroBtn").addEventListener("click", () => {
    selectedNodes = [];
    nodePassInput.value = "";
    syncNodeSelectionUI();
    infoBriefModal.classList.remove("active");
    selectorView.classList.remove("hidden-view");
    splashCurtain.classList.remove("dismissed");
});

window.addEventListener("mousemove", e => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
});

window.addEventListener("scroll", () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    scrollLine.style.width = `${progress}%`;
});

const tiltStage = document.getElementById("tiltStage");
tiltStage.addEventListener("mousemove", e => {
    const rect = tiltStage.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    tiltStage.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
});

tiltStage.addEventListener("mouseleave", () => {
    tiltStage.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
});

function syncHeroStage() {
    const item = catalog[heroRotator[rotatorIdx]];
    document.getElementById("stageTag").textContent = `FEATURED 0${rotatorIdx + 1}`;
    document.getElementById("stageImg").src = item.img;
    document.getElementById("stageName").textContent = item.title;
    document.getElementById("stagePrice").textContent = `$${item.price.toFixed(2)}`;
    document.getElementById("stageCartBtn").dataset.id = item.id;
}

document.getElementById("cycleStageBtn").addEventListener("click", () => {
    rotatorIdx = (rotatorIdx + 1) % heroRotator.length;
    syncHeroStage();
});

function runButtonLoad(btn, text, fn) {
    if (btn.disabled) return;
    btn.disabled = true;
    btn.textContent = "Loading...";
    setTimeout(() => {
        btn.textContent = text;
        btn.disabled = false;
        if (fn) fn();
    }, 2000);
}

function renderSpotlight(slotIndex) {
    const item = catalog[slotIndex];
    spotlightCard.innerHTML = `
        <div class="spot-grid">
            <img src="${item.img}" alt="">
            <div class="spot-details">
                <span class="shop-cat">${item.category}</span>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <div class="spot-meta">
                    <span class="spot-price">$${item.price.toFixed(2)}</span>
                    <button class="bag-add-btn" id="spotCartBtn" data-id="${item.id}">Add To Bag</button>
                </div>
            </div>
        </div>
    `;
    document.getElementById("spotCartBtn").addEventListener("click", function () {
        runButtonLoad(this, "Add To Bag", () => addItemToBag(item.id));
    });
}

document.querySelectorAll(".box46").forEach(tab => {
    tab.addEventListener("click", function () {
        document.querySelectorAll(".box46").forEach(t => t.classList.remove("active"));
        this.classList.add("active");
        renderSpotlight(Number(this.dataset.slot));
    });
});

function renderGrid() {
    const visible = activeFilter === "all"
        ? catalog
        : catalog.filter(p => p.category === activeFilter);

    itemsGrid.innerHTML = visible.map(item => {
        const isSaved = savedList.includes(item.id);
        return `
            <div class="shop-card">
                <div class="shop-pic">
                    <img src="${item.img}" alt="">
                    <span class="shop-badge">${item.badge}</span>
                    <button class="save-heart ${isSaved ? "saved" : ""}" data-save="${item.id}" aria-label="Save">
                        <i class="fa-${isSaved ? "solid" : "regular"} fa-heart"></i>
                    </button>
                </div>
                <div class="shop-body">
                    <span class="shop-cat">${item.category}</span>
                    <h3 class="shop-title">${item.title}</h3>
                    <p class="shop-desc">${item.desc}</p>
                    <div class="shop-foot">
                        <span class="shop-price">$${item.price.toFixed(2)}</span>
                        <button class="bag-add-btn" data-add="${item.id}">Add To Bag</button>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

function addItemToBag(id) {
    const target = catalog.find(p => p.id === id);
    if (!target) return;
    const found = bagList.find(item => item.id === id);
    if (found) {
        found.qty += 1;
    } else {
        bagList.push({ ...target, qty: 1 });
    }
    refreshBagUI();
    showNotice(`${target.title} added to bag`);
}

function refreshBagUI() {
    const qtySum = bagList.reduce((acc, el) => acc + el.qty, 0);
    const priceSum = bagList.reduce((acc, el) => acc + el.price * el.qty, 0);
    const discountAmount = priceSum * promoDiscountRate;
    const finalTotal = Math.max(0, priceSum - discountAmount);

    bagCount.textContent = qtySum;
    bagSub.textContent = `$${priceSum.toFixed(2)}`;
    bagDiscount.textContent = `-$${discountAmount.toFixed(2)}`;
    bagTotal.textContent = `$${finalTotal.toFixed(2)}`;

    if (bagList.length === 0) {
        bagItems.innerHTML = `<div class="bag-empty">Your shopping bag is empty.</div>`;
        return;
    }

    bagItems.innerHTML = bagList.map(item => `
        <div class="bag-row">
            <img src="${item.img}" alt="">
            <div class="bag-info">
                <h4>${item.title}</h4>
                <span>$${(item.price * item.qty).toFixed(2)}</span>
                <div class="bag-qty">
                    <button class="bag-step" data-dec="${item.id}">-</button>
                    <strong>${item.qty}</strong>
                    <button class="bag-step" data-inc="${item.id}">+</button>
                </div>
            </div>
            <button class="bag-del" data-del="${item.id}"><i class="fa-solid fa-trash"></i></button>
        </div>
    `).join("");
}

document.getElementById("applyPromoBtn").addEventListener("click", function () {
    const code = document.getElementById("promoInput").value.trim().toUpperCase();
    runButtonLoad(this, "Apply", () => {
        if (code === "VORTEX15") {
            promoDiscountRate = 0.15;
            refreshBagUI();
            showNotice("15% promo applied");
        } else {
            promoDiscountRate = 0;
            refreshBagUI();
            showNotice("Try code VORTEX15");
        }
    });
});

function toggleSaved(id) {
    const index = savedList.indexOf(id);
    const item = catalog.find(p => p.id === id);
    if (index === -1) {
        savedList.push(id);
        showNotice(`${item.title} saved`);
    } else {
        savedList.splice(index, 1);
        showNotice(`${item.title} removed`);
    }
    refreshSavedUI();
    renderGrid();
}

function refreshSavedUI() {
    savedCount.textContent = savedList.length;
    if (savedList.length === 0) {
        savedItems.innerHTML = `<div class="bag-empty">No saved items yet.</div>`;
        return;
    }

    savedItems.innerHTML = savedList.map(id => {
        const item = catalog.find(p => p.id === id);
        return `
            <div class="bag-row">
                <img src="${item.img}" alt="">
                <div class="bag-info">
                    <h4>${item.title}</h4>
                    <span>$${item.price.toFixed(2)}</span>
                    <button class="bag-add-btn" data-to-bag="${item.id}">Add To Bag</button>
                </div>
                <button class="bag-del" data-unsave="${item.id}"><i class="fa-solid fa-xmark"></i></button>
            </div>
        `;
    }).join("");
}

function openSideDrawer(panel) {
    bagDrawer.classList.remove("open");
    savedDrawer.classList.remove("open");
    panel.classList.add("open");
    overlayBg.classList.add("show");
}

function closeSideDrawers() {
    bagDrawer.classList.remove("open");
    savedDrawer.classList.remove("open");
    overlayBg.classList.remove("show");
}

document.getElementById("openBag").addEventListener("click", () => openSideDrawer(bagDrawer));
document.getElementById("openSaved").addEventListener("click", () => openSideDrawer(savedDrawer));
document.getElementById("closeBag").addEventListener("click", closeSideDrawers);
document.getElementById("closeSaved").addEventListener("click", closeSideDrawers);
overlayBg.addEventListener("click", closeSideDrawers);

document.getElementById("modeSwitch").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
    const icon = this.querySelector("i");
    icon.className = document.body.classList.contains("light-mode")
        ? "fa-solid fa-moon"
        : "fa-solid fa-sun";
});

document.querySelectorAll(".box52").forEach(btn => {
    btn.addEventListener("click", function () {
        document.querySelectorAll(".box52").forEach(b => b.classList.remove("active"));
        this.classList.add("active");
        activeFilter = this.dataset.filter;
        renderGrid();
    });
});

itemsGrid.addEventListener("click", e => {
    const addBtn = e.target.closest("[data-add]");
    const saveBtn = e.target.closest("[data-save]");

    if (addBtn) {
        const id = Number(addBtn.dataset.add);
        runButtonLoad(addBtn, "Add To Bag", () => addItemToBag(id));
    }
    if (saveBtn) {
        toggleSaved(Number(saveBtn.dataset.save));
    }
});

document.getElementById("stageCartBtn").addEventListener("click", function () {
    const id = Number(this.dataset.id);
    runButtonLoad(this, "Add To Bag", () => addItemToBag(id));
});

document.getElementById("flashAddBtn").addEventListener("click", function () {
    runButtonLoad(this, "Claim Drop", () => addItemToBag(10));
});

document.getElementById("duoAddBtn").addEventListener("click", function () {
    runButtonLoad(this, "Grab Duo Pack", () => addItemToBag(9));
});

bagItems.addEventListener("click", e => {
    const inc = e.target.closest("[data-inc]");
    const dec = e.target.closest("[data-dec]");
    const del = e.target.closest("[data-del]");

    if (inc) {
        const item = bagList.find(x => x.id === Number(inc.dataset.inc));
        if (item) item.qty += 1;
        refreshBagUI();
    }
    if (dec) {
        const id = Number(dec.dataset.dec);
        const item = bagList.find(x => x.id === id);
        if (item && item.qty > 1) {
            item.qty -= 1;
        } else {
            bagList = bagList.filter(x => x.id !== id);
        }
        refreshBagUI();
    }
    if (del) {
        bagList = bagList.filter(x => x.id !== Number(del.dataset.del));
        refreshBagUI();
    }
});

savedItems.addEventListener("click", e => {
    const toBag = e.target.closest("[data-to-bag]");
    const unsave = e.target.closest("[data-unsave]");

    if (toBag) {
        const id = Number(toBag.dataset.toBag);
        runButtonLoad(toBag, "Add To Bag", () => addItemToBag(id));
    }
    if (unsave) {
        toggleSaved(Number(unsave.dataset.unsave));
    }
});

document.getElementById("payBtn").addEventListener("click", function () {
    if (bagList.length === 0) {
        showNotice("Bag is empty");
        return;
    }
    runButtonLoad(this, "Place Order", () => {
        bagList = [];
        promoDiscountRate = 0;
        document.getElementById("promoInput").value = "";
        refreshBagUI();
        closeSideDrawers();
        showNotice("Order placed successfully");
    });
});

document.getElementById("vipForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const btn = this.querySelector("button");
    runButtonLoad(btn, "Join VIP", () => {
        this.reset();
        showNotice("Added to VIP list");
    });
});

document.querySelectorAll(".box119").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.parentElement.classList.toggle("open");
    });
});

let countdownSeconds = 8 * 3600 + 42 * 60 + 19;
setInterval(() => {
    if (countdownSeconds <= 0) return;
    countdownSeconds -= 1;
    const h = String(Math.floor(countdownSeconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((countdownSeconds % 3600) / 60)).padStart(2, "0");
    const s = String(countdownSeconds % 60).padStart(2, "0");
    document.getElementById("cdHours").textContent = h;
    document.getElementById("cdMins").textContent = m;
    document.getElementById("cdSecs").textContent = s;
}, 1000);

const scrollObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal-left, .reveal-right").forEach(el => scrollObs.observe(el));

document.querySelectorAll(".counter").forEach(el => {
    const goal = Number(el.dataset.target);
    let num = 0;
    const step = Math.ceil(goal / 45);
    const loop = setInterval(() => {
        num += step;
        if (num >= goal) {
            el.textContent = goal.toLocaleString();
            clearInterval(loop);
        } else {
            el.textContent = num.toLocaleString();
        }
    }, 28);
});

syncNodeSelectionUI();
syncHeroStage();
renderSpotlight(0);
renderGrid();
refreshBagUI();
refreshSavedUI();