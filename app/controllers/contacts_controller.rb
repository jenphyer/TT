class ContactsController < ApplicationController
  def create
    @contact = Contact.new(contact_params)
    @contact.save
    if @contact.save
      redirect_to '/'
    else
      redirect_to contacts_path
    end
  end

  def index
    @contact = Contact.new
  end

  private
  def contact_params
    params.require(:contact).permit(:name, :email, :message)
  end
end
