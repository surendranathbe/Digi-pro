import React, { useState, useRef } from 'react'
import logo from '../assets/digi-pro-logo.png'

export interface EnquiryModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  firstName: string
  lastName: string
  mobileNumber: string
  address: string
  businessName: string
  category: string
  businessDetails: string
  file: File | null
}

const CATEGORIES = [
  'Website Development',
  'ERP',
  'SEO',
  'Digital Marketing',
]

const TARGET_EMAIL = 'surendranathbezawada@gmail.com'

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    address: '',
    businessName: '',
    category: 'Website Development',
    businessDetails: '',
    file: null,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [fileObjectUrl, setFileObjectUrl] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  if (!isOpen) return null

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      // Validate file format: PDF, DOC, DOCX
      const validExtensions = ['.pdf', '.doc', '.docx']
      const fileExt = selectedFile.name.substring(selectedFile.name.lastIndexOf('.')).toLowerCase()
      if (!validExtensions.includes(fileExt)) {
        setErrors((prev) => ({
          ...prev,
          file: 'Please upload a valid document (.pdf, .doc, .docx)',
        }))
        return
      }

      setFormData((prev) => ({ ...prev, file: selectedFile }))
      setFileObjectUrl(URL.createObjectURL(selectedFile))
      setErrors((prev) => ({ ...prev, file: '' }))
    }
  }

  const handleRemoveFile = () => {
    setFormData((prev) => ({ ...prev, file: null }))
    if (fileObjectUrl) {
      URL.revokeObjectURL(fileObjectUrl)
      setFileObjectUrl(null)
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required'
    } else if (!/^[0-9+\s-]{7,15}$/.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = 'Enter a valid mobile number'
    }
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required'
    }
    if (!formData.category) {
      newErrors.category = 'Please select a category'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const generateEmailText = () => {
    const fullName = `${formData.firstName} ${formData.lastName}`.trim()
    const fileName = formData.file ? `${formData.file.name} (${(formData.file.size / 1024).toFixed(1)} KB)` : 'None'

    return `DIGI-PRO CLIENT BUSINESS ENQUIRY
============================================================
CLIENT NAME:      ${fullName}
MOBILE NUMBER:    ${formData.mobileNumber}
ADDRESS:          ${formData.address || 'Not Provided'}
BUSINESS NAME:    ${formData.businessName}
CATEGORY:         ${formData.category}
ATTACHED FILE:    ${fileName}
============================================================
BUSINESS DETAILS:
${formData.businessDetails || 'No additional details provided.'}
============================================================
Sent to: ${TARGET_EMAIL}`
  }

  const handleOpenPdf = () => {
    if (fileObjectUrl) {
      window.open(fileObjectUrl, '_blank')
    }
  }

  const handleSendEmail = () => {
    const fullName = `${formData.firstName} ${formData.lastName}`.trim()
    const subject = encodeURIComponent(`Business Enquiry: ${formData.businessName} (${fullName}) - ${formData.category}`)
    const body = encodeURIComponent(generateEmailText())
    window.location.href = `mailto:${TARGET_EMAIL}?subject=${subject}&body=${body}`
  }

  const handleCopyTable = () => {
    navigator.clipboard.writeText(generateEmailText())
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    // Trigger submission
    setIsSubmitted(true)

    // Launch email client pre-filled with the formatted table to surendranathbezawada@gmail.com
    handleSendEmail()
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setFormData({
      firstName: '',
      lastName: '',
      mobileNumber: '',
      address: '',
      businessName: '',
      category: 'Website Development',
      businessDetails: '',
      file: null,
    })
    if (fileObjectUrl) {
      URL.revokeObjectURL(fileObjectUrl)
      setFileObjectUrl(null)
    }
    setErrors({})
    onClose()
  }

  return (
    <div className="enquiry-modal-overlay" onClick={handleReset} aria-modal="true" role="dialog">
      <div className="enquiry-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="enquiry-close-btn" onClick={handleReset} aria-label="Close modal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Modal Top Branding Header */}
        <div className="enquiry-modal-header">
          <img src={logo} alt="Digi-pro Logo" className="enquiry-brand-logo" />
          <h3 className="enquiry-modal-title">Business Enquiry</h3>
          <div className="enquiry-client-tag">
            <span className="enquiry-tag-star">★</span>
            <span>Best for Clients Enquiry • Direct Consultation</span>
          </div>
        </div>

        {!isSubmitted ? (
          /* ================= ENQUIRY INPUT FORM ================= */
          <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
            {/* Row 1: First Name & Last Name in a single row */}
            <div className="enquiry-form-row">
              <div className="enquiry-field-group">
                <label htmlFor="firstName" className="enquiry-label">
                  First Name <span className="req-star">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="e.g. Surendra"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`enquiry-input ${errors.firstName ? 'has-error' : ''}`}
                />
                {errors.firstName && <span className="enquiry-error-msg">{errors.firstName}</span>}
              </div>

              <div className="enquiry-field-group">
                <label htmlFor="lastName" className="enquiry-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="e.g. Bezawada"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="enquiry-input"
                />
              </div>
            </div>

            {/* Row 2: Mobile Number & Address in a single row */}
            <div className="enquiry-form-row">
              <div className="enquiry-field-group">
                <label htmlFor="mobileNumber" className="enquiry-label">
                  Mobile Number <span className="req-star">*</span>
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="e.g. +91 98765 43210"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className={`enquiry-input ${errors.mobileNumber ? 'has-error' : ''}`}
                />
                {errors.mobileNumber && <span className="enquiry-error-msg">{errors.mobileNumber}</span>}
              </div>

              <div className="enquiry-field-group">
                <label htmlFor="address" className="enquiry-label">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="City, State / Region"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="enquiry-input"
                />
              </div>
            </div>

            {/* Row 3: Business Name */}
            <div className="enquiry-field-group">
              <label htmlFor="businessName" className="enquiry-label">
                Business Name <span className="req-star">*</span>
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                placeholder="e.g. Digi-pro Tech Innovations"
                value={formData.businessName}
                onChange={handleInputChange}
                className={`enquiry-input ${errors.businessName ? 'has-error' : ''}`}
              />
              {errors.businessName && <span className="enquiry-error-msg">{errors.businessName}</span>}
            </div>

            {/* Row 4: Category Select */}
            <div className="enquiry-field-group">
              <label htmlFor="category" className="enquiry-label">
                Category <span className="req-star">*</span>
              </label>
              <div className="enquiry-category-select-wrap">
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="enquiry-select"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <div className="select-arrow-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Row 5: Your Business Details */}
            <div className="enquiry-field-group">
              <label htmlFor="businessDetails" className="enquiry-label">
                Your Business Details
              </label>
              <textarea
                id="businessDetails"
                name="businessDetails"
                rows={3}
                placeholder="Describe your project goals, scope, requirements, or current challenges..."
                value={formData.businessDetails}
                onChange={handleInputChange}
                className="enquiry-textarea"
              />
            </div>

            {/* Row 6: Attach Document (PDF, DOC) */}
            <div className="enquiry-field-group">
              <label className="enquiry-label">
                Attach Project Document <span className="file-hint">(PDF, DOC, DOCX)</span>
              </label>

              {!formData.file ? (
                <div
                  className="enquiry-file-dropzone"
                  onClick={() => fileInputRef.current?.click()}
                  role="button"
                  tabIndex={0}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                  />
                  <div className="dropzone-content">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="upload-icon">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    <span className="dropzone-text">
                      <strong>Click to upload document</strong> or drag and drop
                    </span>
                    <span className="dropzone-formats">PDF, DOC, DOCX up to 10MB</span>
                  </div>
                </div>
              ) : (
                <div className="enquiry-attached-file">
                  <div className="file-info-col">
                    <div className="file-badge-type">
                      {formData.file.name.endsWith('.pdf') ? 'PDF' : 'DOC'}
                    </div>
                    <div className="file-meta-col">
                      <span className="file-name-text">{formData.file.name}</span>
                      <span className="file-size-text">
                        {(formData.file.size / 1024).toFixed(1)} KB
                      </span>
                    </div>
                  </div>

                  <div className="file-actions-row">
                    {fileObjectUrl && (
                      <button
                        type="button"
                        className="btn-preview-file"
                        onClick={handleOpenPdf}
                        title="View document in new tab"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                        <span>View</span>
                      </button>
                    )}
                    <button
                      type="button"
                      className="btn-remove-file"
                      onClick={handleRemoveFile}
                      title="Remove file"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
              {errors.file && <span className="enquiry-error-msg">{errors.file}</span>}
            </div>

            {/* Submit Action Button */}
            <div className="enquiry-submit-wrap">
              <button type="submit" className="enquiry-submit-btn">
                <span>Submit Business Enquiry</span>
                <div className="btn-icon-bubble">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </button>
              <div className="enquiry-disclaimer">
                <span>Direct dispatch to <strong>{TARGET_EMAIL}</strong></span>
              </div>
            </div>
          </form>
        ) : (
          /* ================= SUCCESS & FORMATTED TABLE VIEW ================= */
          <div className="enquiry-success-container">
            <div className="success-badge-header">
              <div className="success-icon-ring">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h4 className="success-title">Enquiry Submitted Successfully!</h4>
              <p className="success-desc">
                Your details have been prepared in a structured format below.
              </p>
            </div>

            {/* Client Details Formatted Table */}
            <div className="enquiry-table-card">
              <div className="table-card-top">
                <span className="table-title">CLIENT ENQUIRY SUMMARY</span>
                <span className="table-dest-tag">Direct Record</span>
              </div>

              <table className="enquiry-summary-table">
                <tbody>
                  <tr>
                    <td className="table-field-cell">Client Name</td>
                    <td className="table-value-cell">
                      <strong>{formData.firstName} {formData.lastName}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-field-cell">Mobile Number</td>
                    <td className="table-value-cell">
                      <a href={`tel:${formData.mobileNumber}`} className="table-tel-link">
                        {formData.mobileNumber}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-field-cell">Address</td>
                    <td className="table-value-cell">
                      {formData.address || '—'}
                    </td>
                  </tr>
                  <tr>
                    <td className="table-field-cell">Business Name</td>
                    <td className="table-value-cell">
                      <strong>{formData.businessName}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-field-cell">Category</td>
                    <td className="table-value-cell">
                      <span className="table-category-pill">{formData.category}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-field-cell">Business Details</td>
                    <td className="table-value-cell">
                      <p className="table-details-text">
                        {formData.businessDetails || 'No details provided.'}
                      </p>
                    </td>
                  </tr>
                  {formData.file && (
                    <tr className="table-highlight-row">
                      <td className="table-field-cell">Uploaded Document</td>
                      <td className="table-value-cell">
                        <div className="table-file-wrap">
                          <span className="table-file-name">{formData.file.name}</span>
                          <span className="table-file-size">
                            ({(formData.file.size / 1024).toFixed(1)} KB)
                          </span>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Quick Action Buttons */}
            <div className="enquiry-success-actions">
              {/* Button to Open the PDF */}
              {formData.file && fileObjectUrl && (
                <button
                  type="button"
                  className="enquiry-btn-action btn-open-pdf"
                  onClick={handleOpenPdf}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                  </svg>
                  <span>Open Uploaded Document</span>
                </button>
              )}

              {/* Direct Send button */}
              <button
                type="button"
                className="enquiry-btn-action btn-send-mail"
                onClick={handleSendEmail}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                <span>Send</span>
              </button>

              {/* Copy table to clipboard */}
              <button
                type="button"
                className="enquiry-btn-action btn-copy-table"
                onClick={handleCopyTable}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Formatted Table'}</span>
              </button>

              <button
                type="button"
                className="enquiry-btn-action btn-close-modal"
                onClick={handleReset}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
