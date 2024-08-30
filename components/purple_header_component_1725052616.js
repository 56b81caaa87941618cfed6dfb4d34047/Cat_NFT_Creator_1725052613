<!--
INSTRUCTION: Summary: HTML file that describes the header section including:
INSTRUCTION: 1. Site branding with a logo on the left.
INSTRUCTION: 2. Desktop navigation menu with links to different pages in the middle.
INSTRUCTION: 3. Desktop sign-in and sign-up links on the right.
-->

<template>
  <header class="w-full z-30" id="header-section-container">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 bg-opacity-30 bg-purple-900 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Site Branding -->
        <div id="site-branding" class="flex-1">
          <a id="logo-link" class="inline-flex" href="index.html" aria-label="Cruip">
            <img id="logo-image" class="max-w-none" src="./images/logo.svg" width="38" height="38" alt="Stellar">
          </a>
        </div>

        <!-- Desktop Navigation -->
        <nav id="desktop-navigation" class="hidden md:flex md:grow">
          <ul id="desktop-menu-links" class="flex grow justify-center flex-wrap items-center">
            <li>
              <a
                id="Home-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-pink-200 hover:text-white"
                href="Home.html"
              >
                Home
              </a>
            </li>
            <li>
              <a
                id="Create NFT-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-pink-200 hover:text-white"
                href="Create NFT.html"
              >
                Create NFT
              </a>
            </li>
            <li>
              <a
                id="Gallery-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-pink-200 hover:text-white"
                href="Gallery.html"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                id="Marketplace-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-pink-200 hover:text-white"
                href="Marketplace.html"
              >
                Marketplace
              </a>
            </li>
            <li>
              <a
                id="About-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-pink-200 hover:text-white"
                href="About.html"
              >
                About
              </a>
            </li>
          </ul>
        </nav>

        <!-- Desktop Sign In & Sign Up Links -->
        <ul id="desktop-sign-in-links" class="flex-1 flex justify-end items-center">
          <li>
            <a
              id="sign-in-link"
              class="font-medium text-sm whitespace-nowrap transition duration-150 ease-in-out text-pink-200 hover:text-white"
              href="signin.html"
            >
              Sign in
            </a>
          </li>
          <li class="ml-6">
            <a
              id="sign-up-link"
              class="btn-sm transition duration-150 ease-in-out w-full group relative text-pink-200 hover:text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 rounded-full px-4 py-2 shadow-lg"
              href="signup.html"
            >
              <span class="relative inline-flex items-center"> Sign up <span id="sign-up-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-pink-300">-&gt;</span> </span>
            </a>
          </li>
        </ul>

        <!-- Mobile Menu -->
        <div class="md:hidden flex items-center ml-4">
          <button
            id="hamburger-button"
            class="hamburger"
            :class="{ active: expanded }"
            @click.stop="expanded = !expanded"
            aria-controls="mobile-nav"
            :aria-expanded="expanded"
          >
            <span class="sr-only">Menu</span>
            <svg id="hamburger-icon" class="w-5 h-5 fill-current transition duration-150 ease-in-out text-pink-200 hover:text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <rect y="2" width="20" height="2" rx="1" />
              <rect y="9" width="20" height="2" rx="1" />
              <rect y="16" width="20" height="2" rx="1" />
            </svg>
          </button>

          <nav
            id="mobile-nav"
            class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
            x-ref="mobileNav"
            :style="expanded ? 'max-height: ' + $refs.mobileNav.scrollHeight + 'px; opacity: 1' : 'max-height: 0; opacity: .8'"
            @click.outside="expanded = false"
            @keydown.escape.window="expanded = false"
            x-cloak
          >
            <ul id="mobile-nav-list" class="border border-transparent rounded-lg px-4 py-1.5 bg-purple-900 bg-opacity-70 backdrop-filter backdrop-blur-lg">
              <li>
                <a id="mobile-Home-link" class="flex font-medium text-sm py-1.5 text-pink-200 hover:text-white" href="Home.html">Home</a>
              </li>
              <li>
                <a id="mobile-Create NFT-link" class="flex font-medium text-sm py-1.5 text-pink-200 hover:text-white" href="Create NFT.html">Create NFT</a>
              </li>
              <li>
                <a id="mobile-Gallery-link" class="flex font-medium text-sm py-1.5 text-pink-200 hover:text-white" href="Gallery.html">Gallery</a>
              </li>
              <li>
                <a id="mobile-Marketplace-link" class="flex font-medium text-sm py-1.5 text-pink-200 hover:text-white" href="Marketplace.html">Marketplace</a>
              </li>
              <li>
                <a id="mobile-About-link" class="flex font-medium text-sm py-1.5 text-pink-200 hover:text-white" href="About.html">About</a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Contact Chloe Form -->
        <div class="flex-1 ml-6">
          <button
            id="contact-chloe-button"
            class="btn-sm transition duration-150 ease-in-out text-pink-200 hover:text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 rounded-full px-4 py-2 shadow-lg flex items-center"
            @click="showContactForm = true"
          >
            <i class='bx bxs-envelope mr-2'></i>
            Contact Chloe
          </button>
        </div>

        <!-- Contact Form Modal -->
        <div v-if="showContactForm" class="fixed inset-0 bg-purple-900 bg-opacity-50 backdrop-filter backdrop-blur-sm flex items-center justify-center z-50">
          <div class="bg-purple-800 bg-opacity-70 rounded-lg p-8 max-w-md w-full shadow-lg backdrop-filter backdrop-blur-lg">
            <h2 class="text-2xl font-bold mb-4 text-pink-200">Contact Chloe</h2>
            <form @submit.prevent="submitContactForm">
              <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-pink-200">Name</label>
                <input type="text" id="name" v-model="contactForm.name" class="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 bg-purple-700 bg-opacity-50 text-white" required>
              </div>
              <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-pink-200">Email</label>
                <input type="email" id="email" v-model="contactForm.email" class="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 bg-purple-700 bg-opacity-50 text-white" required>
              </div>
              <div class="mb-4">
                <label for="message" class="block text-sm font-medium text-pink-200">Message</label>
                <textarea id="message" v-model="contactForm.message" rows="4" class="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 bg-purple-700 bg-opacity-50 text-white" required></textarea>
              </div>
              <div class="flex justify-end">
                <button type="button" @click="showContactForm = false" class="mr-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-pink-200 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Cancel</button>
                <button type="submit" class="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">Send</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "PurpleHeaderComponent",
  data() {
    return {
      expanded: false,
      tab: null,
      showContactForm: false,
      contactForm: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    // Contact form submission method
    submitContactForm() {
      console.log('Form submitted:', this.contactForm);
      // Add your form submission logic here
      this.showContactForm = false;
      // Reset form fields
      this.contactForm = {
        name: '',
        email: '',
        message: ''
      };
    }
    // End of contact form submission method
  }
};
</script>
