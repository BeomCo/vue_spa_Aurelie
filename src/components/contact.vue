<template>

    <div class="pt-10">
        <v-container>
            <form class="gform form-elements" name="contactUs" action="https://script.google.com/macros/s/AKfycbx47hrGO14X3EmYtNTNHwsS8zCvri6whibQCAaHJ9fdval-QzM/exec" method="post">
                <fieldset class="pa-4">
                    <legend>고객 문의 - 메일 발송</legend>
                    <v-row class="align-sm-center my-2">
                        <v-col cols="12" sm="4"><label for="name">이름 또는 회사명 <sup>*</sup></label></v-col>
                        <v-col cols="12" sm="8"><input type="text" id="name" name="name" placeholder="이름 또는 회사명을 입력하세요." required></v-col>
                    </v-row>
                    <v-row class="align-sm-center my-2">
                        <v-col cols="12" sm="4"><label for="email">답변 받을 이메일 주소 <sup>*</sup></label></v-col>
                        <v-col cols="12" sm="8"><input type="email" id="email" name="email" placeholder="답변 받을 이메일 주소를 입력하세요." required></v-col>
                    </v-row>
                    <v-row class="align-sm-center my-2">
                        <v-col cols="12" sm="4"><label for="message">문의 내용 <sup>*</sup></label></v-col>
                        <v-col cols="12" sm="8"><textarea name="message" id="message" required></textarea></v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" class="d-flex justify-end">
                            <v-btn type="submit" class="btn primary pa-3 dark">전송</v-btn>
                        </v-col>
                    </v-row>

                    <div class="thankyou_message">
                        <article>
                            <h1>작성한 내용이 모두 전송 되었습니다.</h1>
                            <p>메일 확인후 회신 드리겠습니다.</p>
                        </article>
                    </div>

                </fieldset>
            
            </form>
        </v-container>
    </div>


</template>


<style>
    @import url(../assets/css/contact.css);
</style>

<script type="text/javascript" src="../assets/js/form-submission-handler.js">

</script>



