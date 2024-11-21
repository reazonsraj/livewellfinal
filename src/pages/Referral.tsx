import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  preferredName: string;
  sex: string;
  dateOfBirth: string;
  streetAddress: string;
  streetAddress2: string;
  city: string;
  state: string;
  postalCode: string;
  postalAddress: string;
  email: string;
  ndisNumber: string;
  planStartDate: string;
  planEndDate: string;
  planType: string;
  phoneNumber: string;
  mobileNumber: string;
  preferredLanguage: string;
  interpreterRequired: boolean;
  disability: string;
  specialRequirements: string;
  carerFirstName: string;
  carerLastName: string;
  carerPostalAddress: string;
  carerEmail: string;
  carerPhone: string;
  carerMobile: string;
  referrerFirstName: string;
  referrerLastName: string;
  referrerOrganization: string;
  referrerPosition: string;
  referrerContact: string;
  referrerPostalAddress: string;
  referrerEmail: string;
}

const Referral = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    preferredName: '',
    sex: '',
    dateOfBirth: '',
    streetAddress: '',
    streetAddress2: '',
    city: '',
    state: '',
    postalCode: '',
    postalAddress: '',
    email: '',
    ndisNumber: '',
    planStartDate: '',
    planEndDate: '',
    planType: '',
    phoneNumber: '',
    mobileNumber: '',
    preferredLanguage: '',
    interpreterRequired: false,
    disability: '',
    specialRequirements: '',
    carerFirstName: '',
    carerLastName: '',
    carerPostalAddress: '',
    carerEmail: '',
    carerPhone: '',
    carerMobile: '',
    referrerFirstName: '',
    referrerLastName: '',
    referrerOrganization: '',
    referrerPosition: '',
    referrerContact: '',
    referrerPostalAddress: '',
    referrerEmail: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailSubject = `New Referral Form Submission - ${formData.firstName} ${formData.lastName}`;
    const emailBody = `
PARTICIPANT DETAILS
------------------
Name: ${formData.firstName} ${formData.lastName}
Preferred Name: ${formData.preferredName}
Sex: ${formData.sex}
Date of Birth: ${formData.dateOfBirth}
Address: ${formData.streetAddress}
${formData.streetAddress2 ? `         ${formData.streetAddress2}` : ''}
         ${formData.city}, ${formData.state} ${formData.postalCode}
Email: ${formData.email}
NDIS Number: ${formData.ndisNumber}
Plan Dates: ${formData.planStartDate} to ${formData.planEndDate}
Plan Type: ${formData.planType}
Phone: ${formData.phoneNumber}
Mobile: ${formData.mobileNumber}
Preferred Language: ${formData.preferredLanguage}
Interpreter Required: ${formData.interpreterRequired ? 'Yes' : 'No'}

Disability Information:
${formData.disability}

Special Requirements:
${formData.specialRequirements}

PRIMARY CARER DETAILS
-------------------
Name: ${formData.carerFirstName} ${formData.carerLastName}
Address: ${formData.carerPostalAddress}
Email: ${formData.carerEmail}
Phone: ${formData.carerPhone}
Mobile: ${formData.carerMobile}

REFERRER DETAILS
---------------
Name: ${formData.referrerFirstName} ${formData.referrerLastName}
Organization: ${formData.referrerOrganization}
Position: ${formData.referrerPosition}
Contact: ${formData.referrerContact}
Address: ${formData.referrerPostalAddress}
Email: ${formData.referrerEmail}
`;

    const mailtoUrl = `mailto:admin@livewellsupport.com.au?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;

    setFormData({
      firstName: '',
      lastName: '',
      preferredName: '',
      sex: '',
      dateOfBirth: '',
      streetAddress: '',
      streetAddress2: '',
      city: '',
      state: '',
      postalCode: '',
      postalAddress: '',
      email: '',
      ndisNumber: '',
      planStartDate: '',
      planEndDate: '',
      planType: '',
      phoneNumber: '',
      mobileNumber: '',
      preferredLanguage: '',
      interpreterRequired: false,
      disability: '',
      specialRequirements: '',
      carerFirstName: '',
      carerLastName: '',
      carerPostalAddress: '',
      carerEmail: '',
      carerPhone: '',
      carerMobile: '',
      referrerFirstName: '',
      referrerLastName: '',
      referrerOrganization: '',
      referrerPosition: '',
      referrerContact: '',
      referrerPostalAddress: '',
      referrerEmail: ''
    });

    alert('Referral form submitted successfully! Your default email client will open with the referral details.');
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-teal-800 mb-8">Referral Form</h1>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Participant Details */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-6 text-teal-700">Participant Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Name</label>
                  <input
                    type="text"
                    name="preferredName"
                    value={formData.preferredName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sex</label>
                  <select
                    name="sex"
                    value={formData.sex}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Address Details */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-6 text-teal-700">Address Details</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Street Address Line 2</label>
                  <input
                    type="text"
                    name="streetAddress2"
                    value={formData.streetAddress2}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* NDIS Details */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-6 text-teal-700">NDIS Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">NDIS Number</label>
                  <input
                    type="text"
                    name="ndisNumber"
                    value={formData.ndisNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Plan Type</label>
                  <input
                    type="text"
                    name="planType"
                    value={formData.planType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Plan Start Date</label>
                  <input
                    type="date"
                    name="planStartDate"
                    value={formData.planStartDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Plan End Date</label>
                  <input
                    type="date"
                    name="planEndDate"
                    value={formData.planEndDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Contact Details */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-6 text-teal-700">Contact Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Language and Disability */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-6 text-teal-700">Additional Information</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Language/Dialect</label>
                  <input
                    type="text"
                    name="preferredLanguage"
                    value={formData.preferredLanguage}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="interpreterRequired"
                      checked={formData.interpreterRequired}
                      onChange={handleChange}
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Interpreter Required</span>
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Disability (if known)</label>
                  <textarea
                    name="disability"
                    value={formData.disability}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                    rows={4}
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
                  <textarea
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                    rows={4}
                  ></textarea>
                </div>
              </div>
            </section>

            {/* Primary Carer Details */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-6 text-teal-700">Primary Carer Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="carerFirstName"
                    value={formData.carerFirstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="carerLastName"
                    value={formData.carerLastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Postal Address</label>
                  <input
                    type="text"
                    name="carerPostalAddress"
                    value={formData.carerPostalAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="carerEmail"
                    value={formData.carerEmail}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="carerPhone"
                    value={formData.carerPhone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    name="carerMobile"
                    value={formData.carerMobile}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
            </section>

            {/* Referrer Details */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-6 text-teal-700">Referrer Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="referrerFirstName"
                    value={formData.referrerFirstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="referrerLastName"
                    value={formData.referrerLastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name</label>
                  <input
                    type="text"
                    name="referrerOrganization"
                    value={formData.referrerOrganization}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
                  <input
                    type="text"
                    name="referrerPosition"
                    value={formData.referrerPosition}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
                  <input
                    type="tel"
                    name="referrerContact"
                    value={formData.referrerContact}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Postal Address</label>
                  <input
                    type="text"
                    name="referrerPostalAddress"
                    value={formData.referrerPostalAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="referrerEmail"
                    value={formData.referrerEmail}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
              </div>
            </section>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Submit Referral
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Referral;