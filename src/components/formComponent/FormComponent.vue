<template>
    <v-form method="post" >
        <v-container>
            <v-row>

                <v-col cols="12">
                    <v-text-field
                            v-model="rechVal"
                            :prepend-icon="icon"
                            :append-outer-icon="rechVal ? 'mdi-send' : ''"
                            filled
                            clear-icon="mdi-close-circle"
                            clearable
                            label="Recherche"
                            type="text"
                            @click:clear="clearMessage"
                            @click:append-outer="findPages"
                    ></v-text-field>
                </v-col>
<!--                <v-col cols="4"> @submit="findPages"-->
<!--                    <v-btn-->
<!--                            :disabled="rechVal ? false : true"-->
<!--                            color="success"-->
<!--                            class="mr-4 centrer"-->
<!--                            type="submit"-->
<!--                    >-->
<!--                        Valider-->
<!--                    </v-btn>-->
<!--                </v-col>-->
            </v-row>
        </v-container>
    </v-form>
</template>

<script src="./lib/formComponent.mvc.js"></script>

<style src="./lib/formComponent.css" scoped></style>