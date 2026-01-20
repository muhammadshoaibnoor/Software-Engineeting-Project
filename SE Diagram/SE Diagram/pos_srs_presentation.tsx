import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const POSPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      title: "Point-of-Sale System",
      content: (
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-bold text-blue-600">Point-of-Sale System</h1>
          <p className="text-2xl text-gray-700">Software Engineering Project</p>
          <div className="mt-12 space-y-4 text-lg">
            <p><strong>Team Members:</strong></p>
            <p>• Muhammad Shoaib (Num-Bscs-2024-57)</p>
            <p>• Allah Ditta (Num-Bscs-2024-10)</p>
            <p>• Zainab Bibi (Num-Bscs-2024-79)</p>
          </div>
          <div className="mt-8 space-y-2 text-lg">
            <p><strong>Course:</strong> CSC-225 - Software Engineering</p>
            <p><strong>Semester:</strong> Fall 2025</p>
            <p><strong>Requirement Provider:</strong> Ms. Asiya Batool</p>
            <p><strong>Date:</strong> 28-December-2025</p>
          </div>
        </div>
      )
    },
    
    // Slide 2: Introduction
    {
      title: "Introduction",
      content: (
        <div className="space-y-6">
          <p className="text-xl leading-relaxed">
            Point-of-Sale System is a centralized software application designed to:
          </p>
          <ul className="space-y-3 text-lg ml-8">
            <li>• Support complete restaurant operations from order to payment</li>
            <li>• Enable role-based access for different operational staff</li>
            <li>• Automate deal recommendations and discount calculations</li>
            <li>• Provide real-time order tracking across all stations</li>
            <li>• Replace manual order handling and disconnected billing systems</li>
          </ul>
        </div>
      )
    },

    // Slide 3: Problem Statement
    {
      title: "Problem Statement",
      content: (
        <div className="space-y-6">
          <p className="text-xl font-semibold text-blue-600">Why We Need This System:</p>
          <ul className="space-y-4 text-lg ml-8">
            <li>• Manual order handling leads to errors, delays, and miscommunication between staff</li>
            <li>• Disconnected systems for ordering and billing cause inconsistencies and data loss</li>
            <li>• No centralized tracking of order status from placement through completion</li>
            <li>• Manual discount calculations and deal recommendations are time-consuming and error-prone</li>
            <li>• Lack of real-time visibility increases service time and reduces customer satisfaction</li>
          </ul>
        </div>
      )
    },

    // Slide 4: Project Objectives
    {
      title: "Project Objectives",
      content: (
        <div className="space-y-4">
          <ul className="space-y-3 text-lg ml-8">
            <li>• Enable waiters to place and manage orders efficiently with table selection</li>
            <li>• Automatically calculate discounts (0.5% per 1,000 PKR for orders ≥ 10,000 PKR)</li>
            <li>• Automatically add complementary items (up to 2% of order value) for qualifying orders</li>
            <li>• Implement role-based access control for Waiter, Cashier, Kitchen Staff, and Admin</li>
            <li>• Provide real-time order status tracking throughout the order lifecycle</li>
            <li>• Generate comprehensive bills with accurate calculations and multiple payment methods</li>
            <li>• Collect customer feedback for service quality improvement</li>
            <li>• Maintain detailed sales reports and analytics for business insights</li>
          </ul>
        </div>
      )
    },

    // Slide 5: End Users
    {
      title: "End Users",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Admin</h3>
              <p className="text-base">Full system access, manage menu items, control complementary items list, view sales reports, manage user accounts</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-600 mb-3">Waiter</h3>
              <p className="text-base">Place orders, select tables, view order status, modify orders before kitchen acceptance, serve customers</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-600 mb-3">Cashier</h3>
              <p className="text-base">Generate bills, process payments (cash, card, online), view order summaries, print receipts</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-600 mb-3">Kitchen Staff</h3>
              <p className="text-base">Receive orders, accept for preparation, update order status, notify waiters when orders are ready</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: Major System Features - Part 1
    {
      title: "Major System Features",
      content: (
        <div className="space-y-5">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-blue-600 mb-2">1. Order Management</h3>
            <p className="text-base">• Place, modify, cancel orders with automatic discount and complementary item calculation</p>
            <p className="text-base">• Real-time order tracking through lifecycle: Pending → In Preparation → Prepared → Served → Completed</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-green-600 mb-2">2. Automatic Deal Optimization</h3>
            <p className="text-base">• 0.5% discount per 1,000 PKR for orders ≥ 10,000 PKR</p>
            <p className="text-base">• Complementary items (up to 2% value) automatically added for qualifying orders</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-purple-600 mb-2">3. User Management</h3>
            <p className="text-base">• Authentication with username/password, forgot password feature</p>
            <p className="text-base">• Role-based access control for different operational roles</p>
          </div>
        </div>
      )
    },

    // Slide 7: Major System Features - Part 2
    {
      title: "Major System Features",
      content: (
        <div className="space-y-5">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-orange-600 mb-2">4. Kitchen Operations</h3>
            <p className="text-base">• Display pending orders, accept for preparation</p>
            <p className="text-base">• Update order status, notify waiters when ready</p>
            <p className="text-base">• Lock orders from modification after acceptance</p>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-red-600 mb-2">5. Payment Processing</h3>
            <p className="text-base">• Multiple payment methods: cash, card swipe, online payment (JazzCash, bank APIs)</p>
            <p className="text-base">• Secure transaction processing with validation</p>
            <p className="text-base">• Generate detailed receipts with all transaction information</p>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">6. Reporting & Analytics</h3>
            <p className="text-base">• Daily, weekly, monthly sales reports</p>
            <p className="text-base">• Track discounts, complementary items, payment methods</p>
            <p className="text-base">• Identify best-selling and low-performing items</p>
          </div>
        </div>
      )
    },

    // Slide 8: Team Contributions - Muhammad Shoaib
    {
      title: "Team Contributions",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Muhammad Shoaib:</h3>
            <ul className="space-y-2 text-lg ml-6">
              <li>• Requirements Gathering and SRS Compilation</li>
              <li>• User Authentication Module Design</li>
              <li>• Order Placement and Processing Requirements</li>
              <li>• System Use Case Diagram Development</li>
              <li>• Context Diagram Creation</li>
              <li>• Performance Requirements Documentation</li>
              <li>• Project Coordination and Documentation Management</li>
            </ul>
          </div>
        </div>
      )
    },

    // Slide 9: Team Contributions - Allah Ditta
    {
      title: "Team Contributions",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Allah Ditta:</h3>
            <ul className="space-y-2 text-lg ml-6">
              <li>• Kitchen Operations Requirements</li>
              <li>• Order Serving Functionality Design</li>
              <li>• Billing and Payment Module Requirements</li>
              <li>• Design Constraints Documentation</li>
              <li>• Hardware and Software Interface Requirements</li>
              <li>• Database Requirements Specification</li>
              <li>• System Attributes Documentation</li>
            </ul>
          </div>
        </div>
      )
    },

    // Slide 10: Team Contributions - Zainab Bibi
    {
      title: "Team Contributions",
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-purple-600 mb-4">Zainab Bibi:</h3>
            <ul className="space-y-2 text-lg ml-6">
              <li>• Customer Feedback Module Design</li>
              <li>• Administration Requirements Documentation</li>
              <li>• External Interface Requirements</li>
              <li>• Non-Functional Requirements Specification</li>
              <li>• Security and Availability Requirements</li>
              <li>• Data Integrity and Maintainability Specifications</li>
              <li>• SRS Review and Quality Assurance</li>
            </ul>
          </div>
        </div>
      )
    },

    // Slide 11: Key Performance Requirements
    {
      title: "Key Performance Requirements",
      content: (
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-600 mb-2">Static Requirements</h4>
              <p className="text-sm">• Support 50 concurrent users</p>
              <p className="text-sm">• Process 500 orders per day</p>
              <p className="text-sm">• 99.99% data consistency</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-600 mb-2">Response Times</h4>
              <p className="text-sm">• Menu loads in 3 seconds</p>
              <p className="text-sm">• Discount calculation in 1 second</p>
              <p className="text-sm">• Order processing in 2 seconds</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold text-purple-600 mb-2">Availability</h4>
              <p className="text-sm">• 99.99% uptime during hours</p>
              <p className="text-sm">• Max 2 hours downtime/month</p>
              <p className="text-sm">• 99.5% critical service uptime</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold text-orange-600 mb-2">Reporting</h4>
              <p className="text-sm">• Daily reports in 5 seconds</p>
              <p className="text-sm">• Yearly reports in 10 seconds</p>
              <p className="text-sm">• 99.99% payment success rate</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 12: System Architecture
    {
      title: "System Architecture",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-blue-600">Technical Specifications</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-xl font-semibold text-green-600">Platform Support</h4>
              <p className="text-base">• Windows 10 or newer</p>
              <p className="text-base">• Android 10 or newer</p>
              <p className="text-base">• Consistent UI across platforms</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-semibold text-purple-600">Hardware Requirements</h4>
              <p className="text-base">• PC: 4GB RAM, 2-core CPU</p>
              <p className="text-base">• Android: 2GB RAM minimum</p>
              <p className="text-base">• Network: 10 Mbps minimum</p>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-xl font-semibold text-orange-600">Integrations</h4>
            <p className="text-base">• Payment gateways (Bank APIs, JazzCash)</p>
            <p className="text-base">• Receipt printer interfaces</p>
            <p className="text-base">• Cash drawer automation</p>
            <p className="text-base">• Local area network (LAN) synchronization</p>
          </div>
        </div>
      )
    },

    // Slide 13: Use Case Diagram
    {
      title: "Use Case Diagram",
      content: (
        <div className="flex items-center justify-center h-full">
          <div className="text-center space-y-4">
            <p className="text-xl text-gray-600">Visual representation of system interactions</p>
            <div className="bg-gray-100 p-8 rounded-lg">
              <p className="text-lg font-semibold">Actors:</p>
              <p className="text-base mt-2">Waiter, Cashier, Kitchen Staff, Admin, Customer</p>
              <p className="text-lg font-semibold mt-6">Key Use Cases:</p>
              <p className="text-base mt-2">Login, Place Order, Process Payment, Update Status,</p>
              <p className="text-base">Generate Reports, Manage Menu, Provide Feedback</p>
            </div>
            <p className="text-sm text-gray-500 italic">(Refer to Figure 1 in SRS Document)</p>
          </div>
        </div>
      )
    },

    // Slide 14: Context Diagram
    {
      title: "Context Diagram",
      content: (
        <div className="flex items-center justify-center h-full">
          <div className="text-center space-y-4">
            <p className="text-xl text-gray-600">System boundaries and external entities</p>
            <div className="bg-gray-100 p-8 rounded-lg">
              <p className="text-lg font-semibold">External Entities:</p>
              <p className="text-base mt-2">• Waiter, Cashier, Kitchen Staff, Admin</p>
              <p className="text-base">• Payment Gateway, Bank API</p>
              <p className="text-base">• Receipt Printer, Cash Drawer</p>
              <p className="text-lg font-semibold mt-6">Data Flows:</p>
              <p className="text-base mt-2">Order Information, Payment Data, Status Updates,</p>
              <p className="text-base">Reports, Menu Updates, Transaction Confirmations</p>
            </div>
            <p className="text-sm text-gray-500 italic">(Refer to Figure 2 in SRS Document)</p>
          </div>
        </div>
      )
    },

    // Slide 15: Thank You
    {
      title: "Thank You",
      content: (
        <div className="flex items-center justify-center h-full">
          <div className="text-center space-y-8">
            <h1 className="text-6xl font-bold text-blue-600">Thank You!</h1>
            <div className="space-y-4 text-xl">
              <p className="text-gray-700">Questions & Discussion</p>
              <div className="mt-12 text-lg text-gray-600">
                <p>Namal University, Mianwali</p>
                <p>Department of Computer Science</p>
                <p>Course: CSC-225 – Software Engineering</p>
                <p>Fall 2025</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      {/* Main Slide Area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-12 h-[600px] flex flex-col">
          {/* Slide Title */}
          <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-blue-500 pb-4">
            {slides[currentSlide].title}
          </h2>
          
          {/* Slide Content */}
          <div className="flex-1 overflow-y-auto">
            {slides[currentSlide].content}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <ChevronLeft size={20} />
            Previous
          </button>

          {/* Slide Indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index
                    ? 'bg-blue-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="flex items-center gap-4">
            <span className="text-gray-600 font-medium">
              {currentSlide + 1} / {slides.length}
            </span>
            
            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POSPresentation;