class Contact < ApplicationRecord
  validates :name, presence: true
  validates_email_format_of :email, presence: true
end
