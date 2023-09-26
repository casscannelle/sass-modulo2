// instancia jquery e evita conflitos
// jQuery( function($){
   $(document).ready(function(){
   
      $('.owl-carousel').owlCarousel();
      
      let titulos = $('h4') // tag
      
      let itens = $('.featured-item') // class
      
      let destaques = $('#featured') // id
      
      // console.log(titulos.first());
      
      // Configuração de produtos
      
      $('.featured-item a').addClass('btn btn-dark stretch-link');
      
      $('.featured-item:first h4').append('<span class="badge bg-primary">Novo</span>')
        

       /*
       * Ouvinte de eventos .nav-modal-open
       */
      $('.nav-modal-open').on('click', function(e){
   
         e.preventDefault();
   
         let elem = $(this).attr('rel')
   
         $('.modal-body').html($('#'+elem).html())
         
         $('.modal-header h5.modal-title').html($(this).text())
   
         let myModal = new bootstrap.Modal($('#modalId'))
   
         myModal.show()
      })

   })
   /*
   * Validação do formulario
   */

   function validate(elem){
      if (elem.val() ==''){
         console.log('O campo '+ elem.attr('name') +'é obrigatório')
         elem.parent().find('.text-muted').show()
         elem.addClass('invalid')

         return false
      } else{
         elem.parent().find('.text-muted').hide()
         elem.removeClass('invalid')
      }
   }

   $('body').on('submit', '.modal-body .form', function (e) {
      e.preventDefault()
      const inputName = $('#nome')
      const inputEmail = $('#email')

      validate(inputName)
      validate(inputEmail)
      validate(inputDestino)

      if (inputEmail.hasClass('invalid') || inputName.hasClass('invalid') || inputDestino.hasClass('invalid')) {
         console.log('Verificar campos obrigatórios')
         return false
      } else {
         $(this).submit()
      }
   })

   $('body').on('blur', '#nome', function () {
      validate($(this))
   })


   $('body').on('blur', '#destino', function(){
      validate($(this))
   })   
   $('body').on('blur', '#email', function () {
      validate($(this))
   })
   $('body').on('blur', '#date', function () {
      $(this).datepicker()
   })
   $('body').on('blur', '#date', function () {
      $(this).mask('00/00/0000')
   })
   $('body').on('blur', '#hora', function () {
      validate($(this))
      $(this).mask('00:00')
   })
   $('body').on('keyup', '#cep', function () {
      validate($(this))
      $(this).mask('00000-000')
   })
   $('body').on('keyup', '#cel', function () {
      validate($(this))
      $(this).mask('00000-0000');
   })
   $('body').on('keyup', '#cpf', function () {
      validate($(this))
      $(this).mask('000.000.000-00');
   })