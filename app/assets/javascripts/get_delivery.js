// $(function(){
//   var array1 = [ '未定','らくらくメルカリ便','ゆうメール','レターパック','普通郵便（定型、定型外）',
//   'クロネコヤマト','ゆうパック','クリックポスト','ゆうパケット' ]
//   var array2 = ['ゆうメール','クロネコヤマト','ゆうパック']

//   function appendOption(method){
//     var html = `<option value="${method}">${method}</option>`;
//     return html;
//   }

//   $("#delivery_charge").on('change',function(){
//     var delivery_parentCategory = ""
//     delivery_parentCategory = document.getElementById('delivery_charge').value;
//     if (delivery_parentCategory  != "---"){
     
//     $.ajax({
//         url: '/items/get_delivery',
//         type: 'GET',
//         data: { parent_name: delivery_parentCategory },
//         dataType: 'json' ,
//         error : function(XMLHttpRequest, textStatus, errorThrown) {
//           console.log("ajax通信に失敗しました");
//           console.log("XMLHttpRequest : " + XMLHttpRequest.status);
//           console.log("textStatus     : " + textStatus);
//           console.log("errorThrown    : " + errorThrown.message);
//       },
//       //ajax通信成功
//       success : function(response) {
//           console.log("ajax通信に成功しました");
//           console.log(response);
//       }
//     })

//       .done(function(method) {
//         $('#delivery_method-parent').remove();
//         var methodBoxHtml = '';
//         var insertHTML = '';
//         if (delivery_parentCategory == "送料込み（出品者負担）"){
//           array1.forEach(function(method){
//           insertHTML += appendOption(method);
//           });
//         }else (delivery_parentCategory == "着払い（購入者負担）");{
//             array2.forEach(function(method){
//             insertHTML += appendOption(method);
//             });
//           }
//         methodBoxHtml = `<div class="listing-product-delivery-method" id="delivery_method-parent"> 
//                           <label class='listing-default__label'> 配送の方法</label> 
//                           <span class='listing-default--require'>必須</span> 
//                             <div class='listing-select-wrapper__box'>
//                               <div class='listing-select-wrapper'></div>
//                                 <select class="listing-select-wrapper__box--select" id="delivery_charge">
//                                   <option value="---">---</option>
//                                   ${insertHTML}
//                                 </select>
//                                 <i class='fas fa-chevron-down listing-select-wrapper__box--arrow-down'></i>
//                               </div>
//                             </div>
//                           </div>`;
//       $('.listing-product-delivery-charge-burden').append(methodBoxHtml);

//         console.log(delivery_parentCategory)
//       })
//     }
//     else {$('#delivery_method-parent').remove();}

//   });

// });